import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 0 20px 0 20px;
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
  border: solid 1px #979797;
  outline: none;
`;
