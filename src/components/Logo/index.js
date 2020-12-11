import React from 'react';
import logo from '../../assets/img/logo.png';
import LogoContainer from './styles';

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="TV Finder" />
    </LogoContainer>
  );
};

export default Logo;
