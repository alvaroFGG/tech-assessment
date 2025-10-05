import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
}

export const CustomInput = ({ label, error, ...props }: Props) => {
  return (
    <Wrapper hasError={!!error}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
      {error && <span className="error">{error}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  > label {
    font-size: 12px;
  }

  > input {
    border-radius: 5px;
    border: 1.5px solid ${({ hasError }) => (hasError ? '#e63946' : '#aab7be')};
    height: 32px;
    padding: 0 8px;
    outline: none;

    &:focus {
      border-color: ${({ hasError }) => (hasError ? '#e63946' : '#2563EB')};
      box-shadow: 0 0 0 2px
        ${({ hasError }) =>
          hasError ? 'rgba(230,57,70,0.2)' : 'rgba(37,99,235,0.2)'};
    }
  }

  .error {
    color: #e63946;
    font-size: 10px;
  }
`;
