import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import HamburgerIcon from './icons/HambuergerIcon';
import colors from '../theme/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const StyledButton = styled(Button)`
  background-color: green;
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background-color: ${colors.primaryBackground};
  opacity: 70%;
  padding: 24px 0 24px 0;
`;

const NavigationTopBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <Button
          onClick={toggleMenu}
          underline={false}
          icon={<HamburgerIcon />}
        />
      ) : (
        <div>
          <Button title='O FIRMIE' />
          <Button title='OFERTA' />
          <Button title='KONTAKT' />
        </div>
      )}
      {isOpen && (
        <MenuDiv>
          <StyledButton underline={false} title='O FIRMIE' />
          <StyledButton underline={false} title='OFERTA' />
          <StyledButton underline={false} title='KONTAKT' />
        </MenuDiv>
      )}
    </Wrapper>
  );
};

export default NavigationTopBar;
