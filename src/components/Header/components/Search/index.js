import React from 'react';
import * as UI from './styles';

const Search = () => {
  return (
    <UI.Wrapper>
      <UI.SearchWrapper>
        <UI.SearchInput placeholder='Search...' />
      </UI.SearchWrapper>
    </UI.Wrapper>
  )
}

export default Search;