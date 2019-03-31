import styled from 'styled-components';

import IconButton from 'components/IconButton';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 420px) {
    height: calc(100% - 77px);
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(IconButton)`
  position: absolute;
  right: 40px;
  bottom: 40px;
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
  background-color: #e990f9;
`;
