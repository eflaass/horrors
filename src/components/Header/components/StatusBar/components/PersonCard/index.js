import React from 'react';
import * as UI from './styles';

const PersonCard = () => {
  return (
    <UI.Wrapper>
      <UI.TextWrapper>
        <UI.Title>Cody Simmmons</UI.Title>
        <UI.Subtitle>Lecturer</UI.Subtitle>
      </UI.TextWrapper>
      <UI.AvatarImage />
    </UI.Wrapper>
  )
}

export default PersonCard;