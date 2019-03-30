import React from 'react';
import PropTypes from 'prop-types';

import Logo from './images/logo.svg';
import Wrapper from './styled';

const Header = ({ component: Component }) => (
  <Wrapper>
    <img src={Logo} alt="logo" />
    {
      Component && <Component />
    }
  </Wrapper>
);

Header.defaultProps = {
  component: null,
};

Header.propTypes = {
  component: PropTypes.func,
};

export default Header;
