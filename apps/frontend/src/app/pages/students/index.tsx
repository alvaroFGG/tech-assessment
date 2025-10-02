import styled from 'styled-components';
import { PageHeader } from '../../components/core/page-header';
import { CustomButton } from '../../components/core/custom-button';
import { DynamicTable } from '../../components/table';
import { Badge } from '../../components/badge';
import i18n from '@tech-assessment/i18n';
import { useState } from 'react';
import { ProfileModal } from '../../components/modals/profile-modal';
import { Student } from '../../models';

const data = [
  {
    name: 'Juan Perez',
    email: 'juanp@example.com',
    phone: '555-1234',
    isActive: true,
  },
  {
    name: 'Maria Gomez',
    email: 'mariag@example.com',
    phone: '555-5678',
    isActive: true,
  },
  {
    name: 'Carlos Sanchez',
    email: 'carloss@example.com',
    phone: '555-8765',
    isActive: false,
  },
] as Student[];

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return (
    <Wrapper>
      <PageHeader title={i18n.t('students')}>
        <CustomButton onClick={() => {}} backgroundColor="#0ABB87">
          <img src="/icons/plus-icon.svg" alt="plus icon" />
          {i18n.t('add_student')}
        </CustomButton>
      </PageHeader>

      {selectedStudent && (
        <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          student={selectedStudent}
        />
      )}

      <DynamicTable
        data={
          data.map((student) => ({
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
                {student.name}
              </span>
            ),
          })) as unknown as Record<string, string>[]
        }
        fields={[' ', 'name', 'user', 'email', 'phone']}
        widths={['1', '3', '3', '3']}
      />
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
