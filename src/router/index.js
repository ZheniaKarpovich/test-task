import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from 'modules/main';
import Login from 'modules/login';
import PrivateRoute from './PrivateRoute';


const AppRouter = ({ isAuthenticated }) => (
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

AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(AppRouter);
