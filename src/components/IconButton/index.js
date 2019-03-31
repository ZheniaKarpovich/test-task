import React from 'react';
import PropTypes from 'prop-types';

import Button from './styled';

const IconButton = ({ icon, children, ...rest }) => (
  <Button {...rest}>
    <img src={icon} alt="icon" />
    { children }
  </Button>
);

IconButton.defaultProps = {
  children: null,
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.shape({}),
};

export default IconButton;
