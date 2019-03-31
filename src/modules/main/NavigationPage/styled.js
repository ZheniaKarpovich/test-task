import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(RouterLink)`
  margin: 10px;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  color: ${({ active }) => (active ? '#7ed321' : 'black')};
`;
