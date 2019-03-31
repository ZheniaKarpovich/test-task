import React from 'react';
import styled from 'styled-components';

import IconButton from 'components/IconButton';
import Button from 'components/Button';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 504px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: 27px;
  top: 24px;
`;

export const SaveButton = styled(Button)`
  width: 320px;
  height: 42px;
  border-radius: 25.2px;
  font-size: 12.6px;

  @media (max-width: 504px) {
    width: 237px
  }
`;

export const Form = styled(({ ...rest }) => (
  <form {...rest} />
))`
  position: relative;
  width: 503px;
  height: 379px;
  border-radius: 44px;
  padding: 101px 91px 47px 91px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #7ed321;

  @media (max-width: 504px) {
    width: 307px
    height: 380px;
    padding: 64px 36px 37px 36px;
  }
`;
