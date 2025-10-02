import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { normalizeId } from '../utils';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private readonly filePath = path.join(__dirname, '../../../DB.json');

  private readData() {
    const raw = fs.readFileSync(this.filePath, 'utf-8');
    const data = JSON.parse(raw);

    return data.map(normalizeId).filter((record: Student) => record !== null); // quita los descartados
  }

  findAll(page: number = 1, pageSize: number = 10) {
    const data = this.readData();

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return {
      data: data.slice(startIndex, endIndex),
      count: data.length,
      page,
      pageSize,
      totalPages: Math.ceil(data.length / pageSize),
    };
  }
}
