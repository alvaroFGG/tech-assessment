import styled from 'styled-components';

interface Props {
  label: string;
  color: string;
}

export const Badge = ({ label, color }: Props) => {
  return <Wrapper color={color}>{label}</Wrapper>;
};

const Wrapper = styled.div<{ color: string }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: ${({ color }) => color || 'gray'};
  color: white;
  font-weight: 600;
`;
