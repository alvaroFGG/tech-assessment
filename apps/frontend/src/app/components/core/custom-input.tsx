import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
}

export const CustomInput = ({ label, error, ...props }: Props) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <input {...props} />
      {error && <span className="error">{error}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  > label {
    font-size: 12px;
  }

  > input {
    border-radius: 5px;
    border: 1.5px solid #aab7be;
    height: 32px;
    padding: 0 8px;
  }

  .error {
    color: red;
    font-size: 10px;
  }
`;
