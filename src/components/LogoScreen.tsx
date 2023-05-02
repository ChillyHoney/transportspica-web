import React from 'react';
import styled from 'styled-components';
import IvecoBackground from '../images/ivecoBackground.jpg';
import Button from './Button';

const StyledDiv = styled.div`
  background-image: url(${IvecoBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const StyledH1 = styled.h1`
  padding: 25% 8% 0% 8%;
`;

const AboutCompany = () => {
  return (
    <StyledDiv>
      <StyledH1>ZAUFAJ NASZEMU DOŚWIADCZENIU TRANSPORTOWE LOVE</StyledH1>
    </StyledDiv>
  );
};

export default AboutCompany;
