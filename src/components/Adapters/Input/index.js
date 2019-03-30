import React from 'react';
import PropTypes from 'prop-types';

import Input from './styled';

const InputAdapter = ({
  input: {
    value,
    onChange,
    ...input
  },
  ...other
}) => (
  <Input
    value={value}
    onChange={onChange}
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
};

export default InputAdapter;
