import styled from 'styled-components';

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

export const CustomButton = ({
  onClick,
  children,
  backgroundColor,
  textColor,
}: Props) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Button = styled.button<{ backgroundColor?: string; textColor?: string }>`
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: ${(props) => props.backgroundColor || '#2563EB'};
  color: ${(props) => props.textColor || '#FFFFFF'};
  font-weight: 600;
  cursor: pointer;
`;
