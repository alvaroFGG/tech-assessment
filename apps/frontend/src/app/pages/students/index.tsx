import styled from 'styled-components';
import { PageHeader } from '../../components/core/page-header';
import { CustomButton } from '../../components/core/custom-button';

const StudentsPage = () => {
  return (
    <Wrapper>
      <PageHeader title="Alumnos">
        <CustomButton onClick={() => {}} backgroundColor="#0ABB87">
          <img src="/icons/plus-icon.svg" alt="plus icon" />
          Nuevo alumno
        </CustomButton>
      </PageHeader>
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
