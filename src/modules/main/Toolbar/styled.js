import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import IconButton from 'components/IconButton';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  outline: none;
`;

export const MenuButton = styled(IconButton)`
  margin-left: 39px;
`;

export const Link = styled(RouterLink)`
  padding: 0 3px 0 3px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin: 0 21px 0 21px;
  border-bottom: ${({ active }) => (active ? '2px solid white' : null)};

  &:visited {
    color: white;
  }

  @media (max-width: 575px) {
    margin: 0 10px 0 10px;
  }
`;
