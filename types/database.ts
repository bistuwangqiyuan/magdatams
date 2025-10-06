export interface Database {
  public: {
    Tables: {
      experiments: {
        Row: Experiment;
        Insert: Omit<Experiment, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Experiment, 'id' | 'created_at'>>;
      };
      data_files: {
        Row: DataFile;
        Insert: Omit<DataFile, 'id' | 'upload_date'>;
        Update: Partial<Omit<DataFile, 'id' | 'upload_date'>>;
      };
      signal_data: {
        Row: SignalData;
        Insert: Omit<SignalData, 'id' | 'created_at'>;
        Update: Partial<Omit<SignalData, 'id' | 'created_at'>>;
      };
      analysis_results: {
        Row: AnalysisResult;
        Insert: Omit<AnalysisResult, 'id' | 'created_at'>;
        Update: Partial<Omit<AnalysisResult, 'id' | 'created_at'>>;
      };
    };
  };
}

export interface Experiment {
  id: string;
  name: string;
  type: string;
  standard: string | null;
  test_date: string;
  operator: string | null;
  material: string | null;
  thickness: number | null;
  magnetization_method: string | null;
  equipment: string | null;
  description: string | null;
  status: '进行中' | '已完成' | '已归档';
  created_at: string;
  updated_at: string;
}

export interface DataFile {
  id: string;
  experiment_id: string | null;
  file_name: string;
  file_path: string;
  file_size: number;
  row_count: number | null;
  frame_count: number | null;
  upload_date: string;
  checksum: string | null;
  metadata: Record<string, any> | null;
}

export interface SignalData {
  id: string;
  file_id: string;
  frame_id: number;
  beam_id: number;
  positions: number[];
  max_value: number | null;
  min_value: number | null;
  avg_value: number | null;
  anomaly_detected: boolean;
  created_at: string;
}

export interface AnalysisResult {
  id: string;
  file_id: string;
  analysis_type: string;
  parameters: Record<string, any> | null;
  results: Record<string, any> | null;
  created_at: string;
}
