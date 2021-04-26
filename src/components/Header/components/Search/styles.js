import styled from 'styled-components';
import searchIcon from '../../../../assets/icons/search.svg';

export const Wrapper = styled.div`
  padding-left: 60px;
`;

export const SearchWrapper = styled.div`
  padding-left: 34px;
  position: relative;

  &::before {
    content: '';
    background: url(${searchIcon}) no-repeat center;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const SearchInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
`;
