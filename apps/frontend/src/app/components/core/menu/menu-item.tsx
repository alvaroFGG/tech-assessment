import styled from 'styled-components';

interface Props {
  icon: string;
  label: string;
}

export const MenuItem = ({ icon, label }: Props) => {
  return (
    <Wrapper className="students">
      <div className="icon">
        <img src={icon} alt={`${label} icon`} />
      </div>

      <span>{label}</span>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 8px;
  cursor: pointer;

  .icon {
    width: 20px;
    height: 20px;
  }
`;
