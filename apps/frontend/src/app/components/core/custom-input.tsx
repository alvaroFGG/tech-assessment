import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CustomInput = ({ label, ...props }: Props) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <input {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4spx;
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
`;
