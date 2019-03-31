import styled from 'styled-components';

import ButtonComonent from 'components/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 420px) {
    background-color: inherit;
  }
`;

export const Button = styled(ButtonComonent)`
  @media (max-width: 420px) {
    color: #e990f9;
    border: solid 3px #e990f9;
  }
`;

export const Img = styled.img`
  #facebook-logo:hover path {
    fill: red;
  }
  @media (max-width: 420px) {
    svg g path{
      fill: #e990f9;
    }
  }
`;
