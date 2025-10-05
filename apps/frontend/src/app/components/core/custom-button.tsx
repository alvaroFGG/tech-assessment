import styled from 'styled-components';

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
}

export const CustomButton = ({
  onClick,
  children,
  variant = 'primary',
}: Props) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled.button<{
  variant: 'primary' | 'secondary' | 'outline' | 'danger';
}>`
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  ${({ variant }) =>
    variant === 'primary' &&
    `
      background: #0CBB87;
      color: white;
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
      background: #E5E7EB;
      color: #111827;
    `}


  ${({ variant }) =>
    variant === 'danger' &&
    `
      background: #E36057;
      color: white;
    `}

  ${({ variant }) =>
    variant === 'outline' &&
    `
      background: transparent;
      border: 1px solid #262D34;
      color: #262D34;
    `}


    &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;
