import styled from 'styled-components';
import { DesktopMenu } from './components/core';
import StudentsPage from './pages/students';
import StudentsProvider from './providers/students-provider';

const StyledApp = styled.main`
  display: flex;
  background: #fafbff;
  width: 100%;
`;

export function App() {
  return (
    <StyledApp>
      <DesktopMenu />

      <StudentsProvider>
        <StudentsPage />
      </StudentsProvider>
    </StyledApp>
  );
}

export default App;
