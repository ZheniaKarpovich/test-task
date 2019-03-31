import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as appActions } from 'redux/app';
import Main from 'modules/main';
import Login from 'modules/login';
import PrivateRoute from './PrivateRoute';


class AppRouter extends Component {
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const { isMobile, actions } = this.props;
    const width = window.innerWidth;

    if (width < 420 && !isMobile) {
      actions.useMobileVersion();
    }

    if (width >= 420 && isMobile) {
      actions.useMobileVersion();
    }
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
          />
          <PrivateRoute
            authenticated={isAuthenticated}
            path="/"
            component={Main}
          />
        </Switch>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    useMobileVersion: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ auth, app }) => ({
  isMobile: app.isMobile,
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...appActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
