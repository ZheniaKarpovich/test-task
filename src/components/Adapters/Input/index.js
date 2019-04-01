import React from 'react';
import PropTypes from 'prop-types';

import Input from './styled';

const InputAdapter = ({
  input: {
    value,
    onChange,
    ...input
  },
  meta: { error, touched },
  ...other
}) => (
  <Input
    value={value}
    onChange={onChange}
    error={error && touched}
    {...input}
    {...other}
  />
);

InputAdapter.defaultProps = {};

InputAdapter.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default InputAdapter;
