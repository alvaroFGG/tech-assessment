import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { normalizeId } from '../utils';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  private readonly filePath = path.join(__dirname, '../../../DB.json');

  private readData() {
    const raw = fs.readFileSync(this.filePath, 'utf-8');
    const data = JSON.parse(raw);

    return data.map(normalizeId).filter((record: Student) => record !== null); // quita los descartados
  }

  private writeData(data: Student[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
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

  create(dto: CreateStudentDto): Student {
    const data = this.readData();

    const newStudent: Student = {
      id: Date.now().toString(),
      ...dto,
    };

    data.push(newStudent);
    this.writeData(data);

    return newStudent;
  }

  update(id: string, dto: Partial<CreateStudentDto>): Student | null {
    const data = this.readData();
    const index = data.findIndex((student) => student.id === id);

    if (index === -1) {
      return null;
    }

    const updatedStudent = { ...data[index], ...dto };
    data[index] = updatedStudent;
    this.writeData(data);

    return updatedStudent;
  }
}
