import styled from 'styled-components';

export const DesktopMenu = () => {
  return (
    <StyledDesktopMenu>
      <div className="title">Logo</div>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.div`
  background: #ffffff;
  padding: 42px;
  width: 100%;
  max-width: 240px;
  height: 100vh;
  display: flex;
  border-right: 1px solid #e6e8f0;
`;
