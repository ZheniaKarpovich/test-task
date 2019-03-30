import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 27px;
  top: 24px; 
  background-color: inherit;
  border: none;
  outline: none;
`;

export const SaveButton = styled(Button)`
  width: 320px;
  height: 42px;
  border-radius: 25.2px;
  font-size: 12.6px;
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
`;
