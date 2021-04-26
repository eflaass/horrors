import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: ${colors.mainPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 100px;
`;

export const LogoImage = styled.img`
  width: 54px;
  height: 54px;
`;
