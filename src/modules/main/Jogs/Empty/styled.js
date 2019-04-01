import styled from 'styled-components';

import Button from 'components/Button';

export const Img = styled.img`
  @media (max-width: 420px), (max-height: 504px) {
    width: 85px;
    height: 86px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  min-height: calc(100% - 116px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-height: 504px) {
    height: calc(100% - 77px);
    min-height: calc(100% - 77px);
  }
`;

export const Title = styled.div`
  margin-top: 47px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 24px;

  @media (max-height: 504px) {
    margin-top: 24px;
  }
`;

export const AddButton = styled(Button)`
  width: 249px;
  margin-top: 141px;
  border: solid 3px ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-height: 504px) {
    margin-top: 70px;
  }
`;
