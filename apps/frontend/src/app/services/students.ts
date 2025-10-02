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

export const createStudent = async (
  student: Omit<Student, 'id'>
): Promise<Student> => {
  const response = await fetch(`${API_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });

  return response.json();
};

export const updateStudent = async (
  id: string,
  student: Omit<Student, 'id'>
): Promise<Student> => {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });

  return response.json();
};
