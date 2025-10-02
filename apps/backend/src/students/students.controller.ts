import { Controller, Get, Query } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly appService: StudentsService) {}

  @Get('')
  findAll(@Query('page') page: string, @Query('pageSize') pageSize: string) {
    return this.appService.findAll(
      page ? Number(page) : 1,
      pageSize ? Number(pageSize) : 10
    );
  }
}
