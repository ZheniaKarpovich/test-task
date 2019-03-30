import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Toolbar from './Toolbar';
import Info from './Info';
import Jogs from './Jogs';

const Main = () => (
  <Fragment>
    <Header component={Toolbar} />
    <Switch>
      <Route
        path="/info"
        component={Info}
      />
      <Route
        path="/contacts"
        component={Info}
      />
      <Route
        path="/"
        component={Jogs}
      />
    </Switch>
  </Fragment>
);

export default Main;
