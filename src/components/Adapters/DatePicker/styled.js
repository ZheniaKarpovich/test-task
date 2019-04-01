import styled from 'styled-components';

import ReactDatePicker from 'react-datepicker';

const DatePicker = styled(ReactDatePicker)`
  width: 236px;
  height: 31px;
  max-height: 31px;
  padding: 7px;
  box-sizing: border-box;
  line-height: 16px;
  font-size: 14px;
  background: white;
  border-radius: 7px;
  border: solid 1px ${({ error, theme }) => (error ? theme.colors.error : theme.colors.lightGrey)};
  outline: none;
`;

export default DatePicker;
