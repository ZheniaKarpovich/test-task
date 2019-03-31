import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Header from 'components/Header';
import IconButton from 'components/IconButton';
import { actions as appActions } from 'redux/app';
import Logo from './images/logo.png';
import * as S from './styled';

const NavigationPage = ({ location, actions }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <Header
        img={Logo}
        component={() => (
          <IconButton
            onClick={() => actions.toggleMenu()}
            icon={Logo}
          />
        )}
      />
      <S.Wrapper>
        <S.Link
          to="/"
          active={pathname === '/' ? 1 : 0}
          onClick={() => actions.toggleMenu()}
        >
          { 'jogs' }
        </S.Link>
        <S.Link
          to="/info"
          active={pathname === '/info' ? 1 : 0}
          onClick={() => actions.toggleMenu()}
        >
          { 'info' }
        </S.Link>
        <S.Link
          to="/contacts"
          active={pathname === '/contacts' ? 1 : 0}
          onClick={() => actions.toggleMenu()}
        >
          { 'contact us' }
        </S.Link>
      </S.Wrapper>
    </Fragment>
  );
};

NavigationPage.propTypes = {
  actions: PropTypes.shape({
    toggleMenu: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};


const mapStateToProps = ({ jogs }) => ({
  filter: jogs.filter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...appActions }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationPage));
