import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


import Logo from './IconButton/filter.svg';
import * as S from './styled';

const Toolbar = ({ location }) => {
  const { pathname } = location;
  return (
    <S.Wrapper>
      <S.Link to="/" active={pathname === '/' ? 1 : 0}>Jogs</S.Link>
      <S.Link to="/info" active={pathname === '/info' ? 1 : 0}>info</S.Link>
      <S.Link to="/contacts" active={pathname === '/contacts' ? 1 : 0}>contact us</S.Link>
      <S.Button>
        <img src={Logo} alt="logo" />
      </S.Button>
    </S.Wrapper>
  );
};

Toolbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Toolbar);
