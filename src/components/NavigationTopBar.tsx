import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationTopBar = () => {
  return (
    <Wrapper>
      <Button title='LOGO' />
      <div>
        <Button title='O FIRMIE' />
        <Button title='OFERTA' />
        <Button title='KONTAKT' />
      </div>
    </Wrapper>
  );
};

export default NavigationTopBar;
