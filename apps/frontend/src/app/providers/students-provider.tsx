import { createContext, useContext, useEffect, useState } from 'react';
import { Student } from '../models';
import { createStudent, findStudents, updateStudent } from '../services';

type StudentsData = {
  data: Student[];
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  loading: boolean;
  createStudentAndFetch: (student: Omit<Student, 'id'>) => Promise<void>;
  updateStudentAndFetch: (
    id: string,
    student: Omit<Student, 'id'>
  ) => Promise<void>;
};

const StudentsContext = createContext<StudentsData | undefined>({
  data: [],
  count: 0,
  page: 1,
  pageSize: 10,
  totalPages: 0,
  setPage: () => {},
  setPageSize: () => {},
  loading: false,
  createStudentAndFetch: async () => {},
  updateStudentAndFetch: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function StudentsProvider({ children }: Props) {
  const [students, setStudents] = useState<Student[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSetPageSize = (newPageSize: number) => {
    setPageSize(newPageSize);
    const newTotalPages = Math.ceil(count / newPageSize);
    setPage((prevPage) =>
      prevPage > newTotalPages ? newTotalPages : prevPage
    );
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await findStudents(page, pageSize);
      setStudents(response.data);
      setCount(response.count);
      setTotalPages(response.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setLoading(false);
    }
  };

  const createStudentAndFetch = async (student: Omit<Student, 'id'>) => {
    await createStudent(student);
    await fetchStudents();
  };

  const updateStudentAndFetch = async (
    id: string,
    student: Omit<Student, 'id'>
  ) => {
    await updateStudent(id, student);
    await fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);

  return (
    <StudentsContext.Provider
      value={{
        data: students,
        count,
        page,
        pageSize,
        totalPages,
        setPage,
        setPageSize: handleSetPageSize,
        loading,
        createStudentAndFetch,
        updateStudentAndFetch,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
}

export const useStudents = () => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentsProvider');
  }
  return context;
};
