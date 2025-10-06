-- 磁检测数据管理系统 - Supabase数据库Schema
-- 执行此文件以创建所有必要的表、索引和触发器

-- 启用UUID扩展
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. 创建实验记录表
CREATE TABLE IF NOT EXISTS experiments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    standard TEXT,
    test_date TIMESTAMP WITH TIME ZONE NOT NULL,
    operator TEXT,
    material TEXT,
    thickness NUMERIC,
    magnetization_method TEXT,
    equipment TEXT,
    description TEXT,
    status TEXT DEFAULT '进行中' CHECK (status IN ('进行中', '已完成', '已归档')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 创建数据文件表
CREATE TABLE IF NOT EXISTS data_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    experiment_id UUID REFERENCES experiments(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    row_count INTEGER,
    frame_count INTEGER,
    upload_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    checksum TEXT,
    metadata JSONB
);

-- 3. 创建信号数据表
CREATE TABLE IF NOT EXISTS signal_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_id UUID REFERENCES data_files(id) ON DELETE CASCADE,
    frame_id INTEGER NOT NULL,
    beam_id INTEGER NOT NULL,
    positions NUMERIC[] NOT NULL,
    max_value NUMERIC,
    min_value NUMERIC,
    avg_value NUMERIC,
    anomaly_detected BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. 创建分析结果表
CREATE TABLE IF NOT EXISTS analysis_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_id UUID REFERENCES data_files(id) ON DELETE CASCADE,
    analysis_type TEXT NOT NULL,
    parameters JSONB,
    results JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. 创建自动更新updated_at的触发器函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 6. 为experiments表添加触发器
DROP TRIGGER IF EXISTS update_experiments_updated_at ON experiments;
CREATE TRIGGER update_experiments_updated_at
    BEFORE UPDATE ON experiments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 7. 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_data_files_experiment_id ON data_files(experiment_id);
CREATE INDEX IF NOT EXISTS idx_data_files_upload_date ON data_files(upload_date DESC);
CREATE INDEX IF NOT EXISTS idx_signal_data_file_id ON signal_data(file_id);
CREATE INDEX IF NOT EXISTS idx_signal_data_frame_beam ON signal_data(frame_id, beam_id);
CREATE INDEX IF NOT EXISTS idx_analysis_results_file_id ON analysis_results(file_id);
CREATE INDEX IF NOT EXISTS idx_experiments_status ON experiments(status);
CREATE INDEX IF NOT EXISTS idx_experiments_test_date ON experiments(test_date DESC);
CREATE INDEX IF NOT EXISTS idx_experiments_type ON experiments(type);

-- 8. 创建用于统计的视图
CREATE OR REPLACE VIEW experiment_statistics AS
SELECT 
    COUNT(*) as total_experiments,
    COUNT(*) FILTER (WHERE status = '进行中') as in_progress,
    COUNT(*) FILTER (WHERE status = '已完成') as completed,
    COUNT(*) FILTER (WHERE status = '已归档') as archived,
    COUNT(*) FILTER (WHERE test_date::date = CURRENT_DATE) as today_experiments
FROM experiments;

CREATE OR REPLACE VIEW file_statistics AS
SELECT 
    COUNT(*) as total_files,
    COALESCE(SUM(file_size), 0) as total_size,
    COUNT(*) FILTER (WHERE upload_date::date = CURRENT_DATE) as today_uploads,
    COALESCE(AVG(file_size), 0) as avg_file_size
FROM data_files;

-- 9. 创建Row Level Security (RLS) 策略
-- 注意：由于是公开访问模式，暂时允许所有操作
-- 如需添加认证，可以修改这些策略

ALTER TABLE experiments ENABLE ROW LEVEL SECURITY;
ALTER TABLE data_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE signal_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE analysis_results ENABLE ROW LEVEL SECURITY;

-- 允许所有人读取
CREATE POLICY "Allow public read access on experiments" ON experiments
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access on data_files" ON data_files
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access on signal_data" ON signal_data
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access on analysis_results" ON analysis_results
    FOR SELECT USING (true);

-- 允许所有人插入
CREATE POLICY "Allow public insert access on experiments" ON experiments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access on data_files" ON data_files
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access on signal_data" ON signal_data
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access on analysis_results" ON analysis_results
    FOR INSERT WITH CHECK (true);

-- 允许所有人更新
CREATE POLICY "Allow public update access on experiments" ON experiments
    FOR UPDATE USING (true);

CREATE POLICY "Allow public update access on data_files" ON data_files
    FOR UPDATE USING (true);

CREATE POLICY "Allow public update access on signal_data" ON signal_data
    FOR UPDATE USING (true);

CREATE POLICY "Allow public update access on analysis_results" ON analysis_results
    FOR UPDATE USING (true);

-- 允许所有人删除
CREATE POLICY "Allow public delete access on experiments" ON experiments
    FOR DELETE USING (true);

CREATE POLICY "Allow public delete access on data_files" ON data_files
    FOR DELETE USING (true);

CREATE POLICY "Allow public delete access on signal_data" ON signal_data
    FOR DELETE USING (true);

CREATE POLICY "Allow public delete access on analysis_results" ON analysis_results
    FOR DELETE USING (true);

-- 10. 创建辅助函数

-- 获取实验的文件数量
CREATE OR REPLACE FUNCTION get_experiment_file_count(exp_id UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM data_files WHERE experiment_id = exp_id);
END;
$$ LANGUAGE plpgsql;

-- 获取文件的信号数据行数
CREATE OR REPLACE FUNCTION get_file_signal_count(f_id UUID)
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM signal_data WHERE file_id = f_id);
END;
$$ LANGUAGE plpgsql;

-- 检测异常信号（值超过阈值）
CREATE OR REPLACE FUNCTION detect_anomalies(threshold NUMERIC DEFAULT 200)
RETURNS TABLE(file_id UUID, frame_id INTEGER, beam_id INTEGER, anomaly_count BIGINT) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        sd.file_id,
        sd.frame_id,
        sd.beam_id,
        COUNT(*) as anomaly_count
    FROM signal_data sd
    WHERE sd.max_value > threshold
    GROUP BY sd.file_id, sd.frame_id, sd.beam_id
    ORDER BY anomaly_count DESC;
END;
$$ LANGUAGE plpgsql;

-- 完成！数据库Schema创建成功
COMMENT ON TABLE experiments IS '实验记录表 - 存储磁检测实验的基本信息';
COMMENT ON TABLE data_files IS '数据文件表 - 存储上传的CSV文件元数据';
COMMENT ON TABLE signal_data IS '信号数据表 - 存储解析后的磁信号数据';
COMMENT ON TABLE analysis_results IS '分析结果表 - 存储数据分析的结果';
