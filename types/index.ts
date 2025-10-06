export * from './database';

// CSV数据类型
export interface CSVRow {
  FrameID: number;
  BeamID: number;
  [key: `Pos${number}`]: number;
}

// 统计数据
export interface Statistics {
  totalExperiments: number;
  totalFiles: number;
  todayUploads: number;
  anomalyCount: number;
  storageUsed: number;
}

// 图表数据点
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

// 热力图数据
export interface HeatmapData {
  x: number;
  y: number;
  value: number;
}
