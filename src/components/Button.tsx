import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../theme/colors';

const appear = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const disappear = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 16px;
  margin: 8px;
  color: ${colors.primaryText};
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primaryFunctional};
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.8s ease-out;
  }

  &:hover:after {
    animation: ${appear} 0.5s forwards;
  }

  &:not(:hover):after {
    animation: ${disappear} 0.4s forwards;
  }
`;

const Button = ({ title }: { title: string }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
