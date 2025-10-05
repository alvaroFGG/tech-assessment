import styled from 'styled-components';
import { MenuItem } from './menu-item';

export const MobileMenu = () => {
  return (
    <StyledMobileMenu role="navigation" aria-label="Main Menu">
      <header className="title">
        <div>
          <img src="/Logo.svg" alt="Logo" />
        </div>

        <div>
          <img src="/icons/bell-icon.svg" alt="bell icon" />
        </div>

        <div>
          <img src="/icons/question-rounded-icon.svg" alt="question icon" />
        </div>
      </header>

      <MenuItem icon="/icons/hat-icon.svg" label="Alumnos" />
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.div`
  background: #ffffff;
  padding: 16px 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .title {
    display: flex;
    gap: 16px;
    height: fit-content;
    align-items: center;
  }
`;
