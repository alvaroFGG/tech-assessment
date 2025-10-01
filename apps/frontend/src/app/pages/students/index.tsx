import styled from 'styled-components';
import { PageHeader } from '../../components/core/page-header';
import { CustomButton } from '../../components/core/custom-button';
import { DynamicTable } from '../../components/table';
import { Badge } from '../../components/badge';
import i18n from '@tech-assessment/i18n';
import { useState } from 'react';
import { ProfileModal } from '../../components/modals/profile-modal';

const data = [
  {
    name: 'Juan Perez',
    user: 'juanp',
    email: 'juanp@example.com',
    phone: '555-1234',
    status: 'active',
  },
  {
    name: 'Maria Gomez',
    user: 'mariag',
    email: 'mariag@example.com',
    phone: '555-5678',
    status: 'active',
  },
  {
    name: 'Carlos Sanchez',
    user: 'carloss',
    email: 'carloss@example.com',
    phone: '555-8765',
    status: 'inactive',
  },
];

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <Wrapper>
      <PageHeader title={i18n.t('students')}>
        <CustomButton onClick={() => {}} backgroundColor="#0ABB87">
          <img src="/icons/plus-icon.svg" alt="plus icon" />
          {i18n.t('add_student')}
        </CustomButton>
      </PageHeader>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        student={selectedStudent}
      />

      <DynamicTable
        data={
          data.map((student) => ({
            ...student,
            ' ': (
              <Badge
                color={student.status === 'active' ? '#90E8BE' : '#CAD6DC'}
                label={student.status === 'active' ? 'Activo' : 'Inactivo'}
              />
            ),
            name: (
              <span
                className="name_link"
                onClick={() => {
                  setSelectedStudent(student as any);
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
