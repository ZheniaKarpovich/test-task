import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: 150px;
  min-height: 150px;
  padding: 0 15px 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 100%;
    height: 188px;
    min-height: 188px;
    border-bottom: 1px solid rgb(151, 151, 151);
  }
`;

export const Info = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 46px;
`;

export const Item = styled.div`
  margin: 4.5px;
`;
