import styled from 'styled-components';

import Button from 'components/Button';

export const Img = styled.img`
  @media (max-width: 420px) {
    width: 85px;
    height: 86px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  margin-top: 47px;
  color: #b0b0b0;
  font-size: 24px;
`;

export const AddButton = styled(Button)`
  width: 249px;
  margin-top: 141px;
  border: solid 3px #e990f9;
  color: #e990f9;
`;
