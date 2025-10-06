import Papa from 'papaparse';
import { CSVRow } from '@/types';
import { CSV_COLUMNS, CSV_POSITION_COUNT } from './constants';

export interface ParseResult {
  data: CSVRow[];
  errors: string[];
  stats: {
    rowCount: number;
    frameCount: number;
    beamCount: number;
    minValue: number;
    maxValue: number;
    avgValue: number;
  };
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

// 验证CSV文件格式
export function validateCSVStructure(file: File): Promise<ValidationResult> {
  return new Promise((resolve) => {
    const errors: string[] = [];

    // 检查文件类型
    if (!file.name.endsWith('.csv')) {
      errors.push('文件必须是CSV格式');
    }

    // 检查文件大小
    if (file.size === 0) {
      errors.push('文件为空');
    }

    // 解析第一行检查列数
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const firstLine = text.split('\n')[0];
      const columns = firstLine.split(',');

      if (columns.length !== CSV_COLUMNS) {
        errors.push(
          `CSV文件列数不正确，应为${CSV_COLUMNS}列，实际为${columns.length}列`
        );
      }

      // 检查表头
      if (columns[0]?.trim() !== 'FrameID') {
        errors.push('第一列应为FrameID');
      }
      if (columns[1]?.trim() !== 'BeamID') {
        errors.push('第二列应为BeamID');
      }

      resolve({
        valid: errors.length === 0,
        errors,
      });
    };

    reader.onerror = () => {
      errors.push('文件读取失败');
      resolve({ valid: false, errors });
    };

    reader.readAsText(file.slice(0, 1024)); // 只读取前1KB
  });
}

// 解析CSV文件
export function parseCSVFile(file: File): Promise<ParseResult> {
  return new Promise((resolve, reject) => {
    const errors: string[] = [];
    const data: CSVRow[] = [];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transform: (value, field) => {
        // 将空字符串转换为0
        if (value === '' || value === null) {
          return 0;
        }
        return value;
      },
      step: (results, parser) => {
        const row = results.data as any;

        // 验证每一行
        if (!row.FrameID || !row.BeamID) {
          errors.push(`第${results.meta.cursor}行：FrameID或BeamID缺失`);
          return;
        }

        // 验证位置数据
        for (let i = 1; i <= CSV_POSITION_COUNT; i++) {
          const value = row[`Pos${i}`];
          if (value === undefined || value === null) {
            errors.push(`第${results.meta.cursor}行：Pos${i}缺失`);
            return;
          }
          if (value < 0 || value > 255) {
            errors.push(
              `第${results.meta.cursor}行：Pos${i}值${value}超出范围(0-255)`
            );
            return;
          }
        }

        data.push(row as CSVRow);

        // 如果错误太多，停止解析
        if (errors.length > 100) {
          parser.abort();
        }
      },
      complete: () => {
        if (data.length === 0) {
          reject(new Error('没有有效数据'));
          return;
        }

        // 计算统计信息
        const frames = new Set(data.map((row) => row.FrameID));
        const beams = new Set(data.map((row) => row.BeamID));

        let sum = 0;
        let min = Infinity;
        let max = -Infinity;
        let count = 0;

        data.forEach((row) => {
          for (let i = 1; i <= CSV_POSITION_COUNT; i++) {
            const value = row[`Pos${i}` as keyof CSVRow] as number;
            sum += value;
            min = Math.min(min, value);
            max = Math.max(max, value);
            count++;
          }
        });

        resolve({
          data,
          errors,
          stats: {
            rowCount: data.length,
            frameCount: frames.size,
            beamCount: beams.size,
            minValue: min,
            maxValue: max,
            avgValue: sum / count,
          },
        });
      },
      error: (error) => {
        reject(new Error(`CSV解析错误：${error.message}`));
      },
    });
  });
}

// 导出CSV数据
export function exportToCSV(data: CSVRow[], filename: string): void {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
