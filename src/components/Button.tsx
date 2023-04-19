import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const StyledButton = styled.button`
  padding: 12px 8px 4px 8px;
  margin: 8px;
  background-color: transparent;
  border: none;
  color: ${colors.primaryFunctional};
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${colors.secondaryFunctional};
  }
  &:active {
    color: ${colors.secondaryFunctional};
    border-radius: 0.6px;
    border-bottom: 3px solid ${colors.secondaryFunctional};
  }
`;

const Button = ({ title }: { title: string }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
