import styled from 'styled-components';
import { DesktopMenu } from './components/core';

const StyledApp = styled.main`
  display: flex;
  background: #fafbff;
  width: 100%;
`;

export function App() {
  return (
    <StyledApp>
      <DesktopMenu />
    </StyledApp>
  );
}

export default App;
