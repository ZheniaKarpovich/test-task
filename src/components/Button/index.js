import styled from 'styled-components';

const Button = styled.button`
  width: 151px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border: solid 3px ${({ theme }) => theme.colors.white};
  background-color: inherit;
  outline: none;
`;

export default Button;
