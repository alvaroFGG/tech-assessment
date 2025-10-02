import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

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

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.appService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateStudentDto>) {
    return this.appService.update(id, dto);
  }
}
