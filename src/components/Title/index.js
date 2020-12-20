import React from 'react';
import * as UI from './styles';

const Title = props => {
  const { text } = props;
  return (
    <UI.Wrapper>{text}</UI.Wrapper>
  )
}

export default Title;
