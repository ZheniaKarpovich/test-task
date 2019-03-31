import styled from 'styled-components';
import { Flex } from '@rebass/grid';

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 116px;
  padding: 30px 30px 30px 37px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: #7ed321;

  @media (max-width: 420px) {
    height: 77px;
  }
`;

export const Img = styled.img`
  @media (max-width: 420px) {
    width: 98px;
    height: 37px;
  }
`;
