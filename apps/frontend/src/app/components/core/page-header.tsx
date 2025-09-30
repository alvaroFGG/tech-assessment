import styled from 'styled-components';

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const PageHeader = ({ title, children }: Props) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    font-weight: 400;
  }
`;
