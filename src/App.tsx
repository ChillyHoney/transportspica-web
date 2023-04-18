import React from 'react';
import NavigationTopBar from './components/NavigationTopBar';
import styled from 'styled-components';
import colors from './theme/colors';

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.primaryBackground};
  color: ${colors.primaryText};
`;

function App() {
  return (
    <Wrapper>
      <NavigationTopBar />
    </Wrapper>
  );
}

export default App;
