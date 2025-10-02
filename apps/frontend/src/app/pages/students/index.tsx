import styled from 'styled-components';
import { PageHeader } from '../../components/core/page-header';
import { CustomButton } from '../../components/core/custom-button';
import { DynamicTable } from '../../components/table';
import { Badge } from '../../components/badge';
import i18n from '@tech-assessment/i18n';
import { useEffect, useState } from 'react';
import { ProfileModal } from '../../components/modals/profile-modal';
import { Student } from '../../models';
import { findStudents, GenericApiResponse } from '../../services';
import { Pagination } from '../../components/pagination/pagination';

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(
    undefined
  );
  const [data, setData] = useState<GenericApiResponse<Student> | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await findStudents(page, pageSize);
      setData(response);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);

  return (
    <Wrapper>
      <PageHeader title={i18n.t('students')}>
        <CustomButton
          onClick={() => {
            setSelectedStudent(undefined);
            setIsModalOpen(true);
          }}
          backgroundColor="#0ABB87"
        >
          <img src="/icons/plus-icon.svg" alt="plus icon" />
          {i18n.t('add_student')}
        </CustomButton>
      </PageHeader>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        student={selectedStudent}
      />

      {data && data.data.length > 0 && (
        <DynamicTable
          data={
            data.data.map((student: Student) => ({
              ...student,
              ' ': (
                <Badge
                  color={student.isActive === true ? '#90E8BE' : '#CAD6DC'}
                  label={student.isActive === true ? 'Activo' : 'Inactivo'}
                />
              ),
              name: (
                <span
                  className="name_link"
                  onClick={() => {
                    setSelectedStudent(student);
                    setIsModalOpen(true);
                  }}
                >
                  {student.name} {student.lastName}
                </span>
              ),
              user: <span>{student.email.split('@')[0]}</span>,
            })) as unknown as Record<string, string>[]
          }
          fields={[' ', 'name', 'user', 'email', 'phone']}
          widths={['1', '3', '3', '3']}
        />
      )}

      {data && (
        <Pagination
          count={data.count}
          page={data.page}
          onPageChange={(newPage) => setPage(newPage)}
          pageSize={data?.pageSize || 10}
          setPageSize={setPageSize}
          totalPages={data.totalPages}
        />
      )}
    </Wrapper>
  );
};

export default StudentsPage;

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  .name_link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
