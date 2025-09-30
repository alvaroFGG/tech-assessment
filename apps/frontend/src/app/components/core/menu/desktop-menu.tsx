import styled from 'styled-components';

export const DesktopMenu = () => {
  return (
    <StyledDesktopMenu>
      <div className="title">
        <div>
          <img src="/Logo.svg" alt="Logo" />
        </div>

        <div>
          <img src="/icons/bell-icon.svg" alt="bell icon" />
        </div>

        <div>
          <img src="/icons/question-rounded-icon.svg" alt="question icon" />
        </div>
      </div>

      <div className="students">
        <div className="hat_icon">
          <img src="/icons/hat-icon.svg" alt="hat icon" />
        </div>

        <span>Alumnos</span>
      </div>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.div`
  background: #ffffff;
  padding-top: 32px;
  padding-left: 24px;
  width: 100%;
  max-width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 48px;
  border-right: 1px solid #e6e8f0;

  .title {
    display: flex;
    gap: 16px;
    height: fit-content;
    align-items: center;
  }

  .students {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 8px;

    .hat_icon {
      width: 20px;
      height: 20px;
    }
  }
`;
