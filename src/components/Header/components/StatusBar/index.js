import React from 'react';
import PersonCard from './components/PersonCard';
import * as UI from './styles';

const StatusBar = () => {
  return (
    <UI.Wrapper>
      <PersonCard />
      <UI.Divider />
      <UI.Notifications></UI.Notifications>
      <UI.Login></UI.Login>
    </UI.Wrapper>
  )
}

export default StatusBar;