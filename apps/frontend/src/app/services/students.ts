import { API_URL, GenericApiResponse } from '.';
import { Student } from '../models';

export const findStudents = async (
  page: number,
  pageSize: number
): Promise<GenericApiResponse<Student>> => {
  const response = await fetch(
    `${API_URL}/students?page=${page}&pageSize=${pageSize}`
  );

  return response.json();
};
