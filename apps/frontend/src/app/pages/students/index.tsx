import styled from 'styled-components';
import { PageHeader } from '../../components/core/page-header';
import { CustomButton } from '../../components/core/custom-button';
import { DynamicTable } from '../../components/table';
import { Badge } from '../../components/badge';

const data = [
  { name: 'Juan Perez', age: 20, grade: 'A', status: 'active' },
  { name: 'Maria Gomez', age: 22, grade: 'B', status: 'active' },
  { name: 'Carlos Sanchez', age: 21, grade: 'C', status: 'inactive' },
];

const StudentsPage = () => {
  return (
    <Wrapper>
      <PageHeader title="Alumnos">
        <CustomButton onClick={() => {}} backgroundColor="#0ABB87">
          <img src="/icons/plus-icon.svg" alt="plus icon" />
          Nuevo alumno
        </CustomButton>
      </PageHeader>

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
          })) as unknown as Record<string, string>[]
        }
        fields={[' ', 'name', 'age', 'grade']}
        widths={['1', '5', '2', '2']}
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
`;
