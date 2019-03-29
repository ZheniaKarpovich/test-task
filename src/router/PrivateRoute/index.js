import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (authenticated) {
        return <Component {...props} />;
      }
      return <Redirect to={{ pathname: '/authorization', state: { from: props.location } }} />;
    }}
  />
);

PrivateRoute.defaultProps = {
  location: null,
};

PrivateRoute.propTypes = {
  location: PropTypes.shape({}),
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
