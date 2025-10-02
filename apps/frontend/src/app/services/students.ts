import { API_URL } from '.';
import { Student } from '../models';

export const findStudents = async (
  page: number,
  pageSize: number
): Promise<Student[]> => {
  const response = await fetch(
    `${API_URL}/students?page=${page}&pageSize=${pageSize}`
  );
  console.log(response);
  return response.json();
};
