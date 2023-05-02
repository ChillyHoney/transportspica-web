import React from 'react';
import NavigationTopBar from './components/NavigationTopBar';
import AboutCompany from './components/LogoScreen';
import styled from 'styled-components';
import colors from './theme/colors';

const Wrapper = styled.div`
  background-color: ${colors.primaryBackground};
  color: ${colors.primaryText};
`;

const App = () => {
  return (
    <Wrapper>
      <NavigationTopBar />
      <AboutCompany />
    </Wrapper>
  );
};

export default App;
