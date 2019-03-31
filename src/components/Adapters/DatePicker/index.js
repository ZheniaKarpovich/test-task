import React from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from './styled';

const DatePickerAdapter = ({
  input: {
    value,
    onChange,
    ...input
  },
  ...other
}) => (
  <DatePicker
    selected={value || null}
    onChange={onChange}
    dateFormat="dd.MM.yyyy"
    {...input}
    {...other}
  />
);

DatePickerAdapter.defaultProps = {};

DatePickerAdapter.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
};

export default DatePickerAdapter;
