import styled from 'styled-components';

interface Props {
  label: string;
  color: string;
}

export const Badge = ({ label, color }: Props) => {
  return (
    <Wrapper id="badge" color={color}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ color: string }>`
  border-radius: 5px;
  background-color: ${({ color }) => color || 'gray'};
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: fit-content;
  padding: 3px 7px;
`;
