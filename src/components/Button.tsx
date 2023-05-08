import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../theme/colors';

interface ButtonProps {
  title?: string;
  icon?: React.ReactNode;
  underline?: boolean;
  fullWidth?: boolean;
}

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

const StyledButton = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  padding: 8px 16px 8px 16px;
  color: ${colors.primaryText};
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.2);
  }

  &:active {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.4);
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${(props) => (props.underline ? '2px' : '0px')};
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

const Button = ({ title, icon, underline = true }: ButtonProps) => {
  return (
    <StyledButton underline={underline}>
      {title}
      {icon}
    </StyledButton>
  );
};

export default Button;
