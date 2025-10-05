import styled from 'styled-components';
import { DesktopMenu } from './components/core';
import StudentsPage from './pages/students';
import StudentsProvider from './providers/students-provider';
import { useIsMobile } from './hooks/is-mobile';
import { MobileMenu } from './components/core/menu/mobile-menu';

const StyledApp = styled.main`
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export function App() {
  const isMobile = useIsMobile();

  return (
    <StyledApp>
      {!isMobile && <DesktopMenu />}

      {isMobile && <MobileMenu />}

      <StudentsProvider>
        <StudentsPage />
      </StudentsProvider>
    </StyledApp>
  );
}

export default App;
