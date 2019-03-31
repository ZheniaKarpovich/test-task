import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { actions as jogsActions } from 'redux/jogs';
import Active from './images/filter-active.svg';
import Logo from './images/filter.svg';
import * as S from './styled';

const Toolbar = ({ location, actions, filter }) => {
  const { pathname } = location;
  return (
    <S.Wrapper>
      <S.Link to="/" active={pathname === '/' ? 1 : 0}>Jogs</S.Link>
      <S.Link to="/info" active={pathname === '/info' ? 1 : 0}>info</S.Link>
      <S.Link to="/contacts" active={pathname === '/contacts' ? 1 : 0}>contact us</S.Link>
      <S.Button onClick={() => actions.toggleFilter()}>
        <img src={filter ? Active : Logo} alt="logo" />
      </S.Button>
    </S.Wrapper>
  );
};

Toolbar.propTypes = {
  filter: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    toggleFilter: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};


const mapStateToProps = ({ jogs }) => ({
  filter: jogs.filter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...jogsActions }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));
