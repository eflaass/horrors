import React from 'react';
import logoIcon from '../../../../assets/icons/logo.svg';
import * as UI from './styles';

const Logo = () => {
  return (
    <UI.Wrapper>
        <UI.LogoImage src={logoIcon} alt='logo' />
    </UI.Wrapper>
  )
}

export default Logo;