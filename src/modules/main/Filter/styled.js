import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  max-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 420px) {
    height: calc(100% - 77px);
    border-bottom: 1px solid rgb(151, 151, 151);
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 0 20px 0 20px;
`;

export const LeftItem = styled(Item)`
  div .react-datepicker__triangle {
    left: 185px;
  }
`;

export const DatePicker = styled(ReactDatePicker)`
  width: 100px;
  height: 31px;
  max-height: 31px;
  margin-left: 15px;
  padding: 7px;
  box-sizing: border-box;
  line-height: 16px;
  font-size: 14px;
  background: white;
  border-radius: 11px;
  border: solid 1px ${({ theme }) => theme.colors.lightGrey};
  outline: none;

  @media (max-width: 420px) {
    width: 72px;
  }
`;
