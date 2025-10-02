import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const PaginationItem = ({
  isActive,
  children,
  onClick,
  isDisabled,
}: Props) => {
  return (
    <Wrapper isActive={isActive} onClick={onClick} isDisabled={isDisabled}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  width: fit-content;
  min-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  color: ${(props) => (props.isActive ? '#0CBB87' : '#000000')};
  border: 1px solid ${(props) => (props.isActive ? '#0CBB87' : 'none')};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;
