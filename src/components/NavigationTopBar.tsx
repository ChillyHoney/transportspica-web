import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import HamburgerIcon from './icons/HambuergerIcon';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const NavigationTopBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Button underline={false} title='LOGO' />
      {windowWidth < 768 ? (
        <Button underline={false} icon={<HamburgerIcon />} />
      ) : (
        <div>
          <Button title='O FIRMIE' />
          <Button title='OFERTA' />
          <Button title='KONTAKT' />
        </div>
      )}
    </Wrapper>
  );
};

export default NavigationTopBar;
