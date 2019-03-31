import React from 'react';
import PropTypes from 'prop-types';

import Logo from './images/logo.svg';
import * as S from './styled';

const Header = ({ component: Component, logo }) => (
  <S.Wrapper>
    <S.Img src={logo} alt="logo" />
    {
      Component && <Component />
    }
  </S.Wrapper>
);

Header.defaultProps = {
  logo: Logo,
  component: null,
};

Header.propTypes = {
  logo: PropTypes.string,
  component: PropTypes.func,
};

export default Header;
