import styled from 'styled-components';

import Flex from 'components/Flex';

export const Wrapper = styled(Flex).attrs({
  height: [77, 116, 116],
})`
  width: 100%;
  padding: 0 30px 0 37px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-height: 504px) {
    height: 77px;
  }
`;

export const Img = styled.img`
  @media (max-width: 420px) {
    width: 98px;
    height: 37px;
  }
`;
