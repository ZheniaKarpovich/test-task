import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from 'modules/main';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => (
  <Router>
    <Switch>
      <PrivateRoute
        authenticated
        path="/"
        component={Main}
      />
    </Switch>
  </Router>
);

export default AppRouter;
