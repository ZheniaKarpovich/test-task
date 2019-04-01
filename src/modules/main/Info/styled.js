import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  padding: 85px 25px 0 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: auto;

  @media (max-width: 420px) {
    padding: 25px 25px 0 25px;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  width: 100%;
  min-width: 300px;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 1.71;
`;

export const Title = styled.h2`
  color: #7ed321;
  align-self: flex-start;
`;
