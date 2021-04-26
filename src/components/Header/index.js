import React from 'react';
import Logo from './components/Logo';
import Search from './components/Search';
import StatusBar from './components/StatusBar';
import * as UI from './styles';

const Header = () => {
  return (
    <UI.Wrapper>
        <Logo />
        <UI.Topbar>
          <Search />
          <StatusBar />
        </UI.Topbar>
    </UI.Wrapper>
  )
}

export default Header;