import styled from 'styled-components';
import { DesktopMenu } from './components/core';
import StudentsPage from './pages/students';

const StyledApp = styled.main`
  display: flex;
  background: #fafbff;
  width: 100%;
`;

export function App() {
  return (
    <StyledApp>
      <DesktopMenu />

      <StudentsPage />
    </StyledApp>
  );
}

export default App;
