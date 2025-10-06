// 实验类型
export const EXPERIMENT_TYPES = [
  { value: '焊缝检测', label: '焊缝检测 (Weld Inspection)' },
  { value: '表面缺陷检测', label: '表面缺陷检测 (Surface Defect Detection)' },
  { value: '双层结构检测', label: '双层结构检测 (Multilayer Structure)' },
  { value: '应力集中区检测', label: '应力集中区检测 (Stress Concentration)' },
  { value: '腐蚀检测', label: '腐蚀检测 (Corrosion Detection)' },
] as const;

// 实验状态
export const EXPERIMENT_STATUS = [
  { value: '进行中', label: '进行中', color: 'blue' },
  { value: '已完成', label: '已完成', color: 'green' },
  { value: '已归档', label: '已归档', color: 'gray' },
] as const;

// 国际标准
export const STANDARDS = [
  'ISO 9934-1',
  'ISO 9934-2',
  'ISO 9934-3',
  'ASTM E709',
  'ASTM E1444',
  'GB/T 15822',
  'AWS D1.1',
  'EN ISO 9712',
] as const;

// 磁化方法
export const MAGNETIZATION_METHODS = [
  '直接通电法',
  '中心导体法',
  '磁轭法',
  '线圈法',
  '感应电流法',
] as const;

// 文件配置
export const MAX_FILE_SIZE =
  Number(process.env.NEXT_PUBLIC_MAX_FILE_SIZE) || 500 * 1024 * 1024; // 500MB
export const MAX_FILES_PER_UPLOAD =
  Number(process.env.NEXT_PUBLIC_MAX_FILES_PER_UPLOAD) || 10;
export const ALLOWED_FILE_TYPES = ['.csv'];

// CSV配置
export const CSV_COLUMNS = 898; // FrameID + BeamID + 896 Positions
export const CSV_HEADER_PREFIX = ['FrameID', 'BeamID'];
export const CSV_POSITION_COUNT = 896;

// 颜色配色方案
export const COLOR_SCHEMES = {
  viridis: 'Viridis',
  jet: 'Jet',
  hot: 'Hot',
  gray: '灰度',
  industrial: '工业化',
} as const;

// 分析类型
export const ANALYSIS_TYPES = [
  { value: 'peak_detection', label: '峰值检测' },
  { value: 'baseline_correction', label: '基线校正' },
  { value: 'noise_filtering', label: '噪声过滤' },
  { value: 'feature_extraction', label: '特征提取' },
  { value: 'defect_detection', label: '缺陷识别' },
] as const;
