import styled from 'styled-components';

import Flex from 'components/Flex';
import IconButton from 'components/IconButton';

export const Wrapper = styled(Flex).attrs({
  height: ['calc(100% - 77px)', 'calc(100% - 116px)', 'calc(100% - 116px)'],
  minHeight: ['calc(100% - 77px)', 'calc(100% - 116px)', 'calc(100% - 116px)'],
})`
  width: 100%;
  overflow: auto;
  flex-direction: column;
  align-items: center;

  @media (max-height: 504px) {
    height: calc(100% - 77px);
    min-height: calc(100% - 77px);
  }
`;

export const FormWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(IconButton)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  @media (max-width: 420px) {
    right: 31px;
    bottom: 31px;
  }

  @media (max-width: 350px) {
    right: 15px;
    bottom: 15px;
  }
`;

export const Content = styled.div`
  width: 503px;
  height: 379px;
  box-sizing: border-box;
  padding: 77px 0 36px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
