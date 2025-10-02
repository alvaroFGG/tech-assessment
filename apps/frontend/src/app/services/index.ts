export * from './students';

export const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

export interface GenericApiResponse<T> {
  data: T[];
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
