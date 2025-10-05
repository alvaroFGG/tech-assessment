import styled from 'styled-components';
import { PageHeader } from '../../components/core/page-header';
import { CustomButton } from '../../components/core/custom-button';
import { DynamicTable } from '../../components/table';
import { Badge } from '../../components/badge';
import i18n from '@tech-assessment/i18n';
import { useState } from 'react';
import { ProfileModal } from '../../components/modals/profile-modal';
import { Student } from '../../models';
import { Pagination } from '../../components/pagination/pagination';
import { useStudents } from '../../providers/students-provider';

const StudentsPage = () => {
  const {
    data,
    count,
    page,
    pageSize,
    totalPages,
    setPage,
    setPageSize,
    loading,
  } = useStudents();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(
    undefined
  );

  const renderStatus = (active: boolean) => (
    <Badge
      color={active ? '#90E8BE' : '#CAD6DC'}
      label={active ? 'Activo' : 'Inactivo'}
    />
  );

  const renderName = (student: Student) => (
    <span
      className="name_link"
      onClick={() => {
        setSelectedStudent(student);
        setIsModalOpen(true);
      }}
    >
      {student.name} {student.lastName}
    </span>
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <PageHeader title={i18n.t('students')}>
        <CustomButton
          onClick={() => {
            setSelectedStudent(undefined);
            setIsModalOpen(true);
          }}
          variant="primary"
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

      {data && data.length > 0 && (
        <DynamicTable
          data={
            data.map((student: Student) => ({
              ...student,
              ' ': renderStatus(student.isActive),
              name: renderName(student),
              user: <span>{student.email.split('@')[0]}</span>,
            })) as unknown as Record<string, string>[]
          }
          fields={[' ', 'name', 'user', 'email', 'phone']}
          widths={['1', '3', '3', '3']}
        />
      )}

      {data && (
        <Pagination
          count={count}
          page={page}
          onPageChange={(newPage) => setPage(newPage)}
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalPages={totalPages}
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
    transition: color 0.2s ease;
    &:hover {
      color: #0abb87;
      text-decoration: underline;
    }
  }
`;
