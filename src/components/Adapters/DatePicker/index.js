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
  meta: { error, touched },
  ...other
}) => (
  <DatePicker
    selected={value || null}
    onChange={onChange}
    error={error && touched}
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
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DatePickerAdapter;
