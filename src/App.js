import React from 'react';

import Routes from './Routes';

import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: white;
  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Routes />
    </AppWrapper>
  );
}

export default App;
