import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import mySvg from './svg/HamburgerIcon.svg';

const StyledSVG = styled(ReactSVG)`
  width: 48px;
`;

const HamburgerIcon = () => {
  return <StyledSVG src={mySvg} />;
};

export default HamburgerIcon;
