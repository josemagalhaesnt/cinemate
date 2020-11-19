import React from 'react';
import { Container } from './styles';
import logo from 'assets/img/logo.png';

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="TV Finder" />
    </Container>
  );
};

export default Logo;
