import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  outline: none;
`;

export const Link = styled(RouterLink)`
  padding: 0 3px 0 3px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin: 0 42px 0 42px;

  border-bottom: ${({ active }) => (active ? '2px solid white' : null)};

  &:visited {
    color: white;
  }
`;
