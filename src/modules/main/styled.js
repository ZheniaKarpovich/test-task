import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  background-color: ${({ theme }) => theme.colors.secondary};
`;
