import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Navigation from './NavigationPage';
import Toolbar from './Toolbar';
import Info from './Info';
import Jogs from './Jogs';

const Main = ({ menuIsOpen }) => {
  if (menuIsOpen) {
    return <Navigation />;
  }

  return (
    <Fragment>
      <Header
        component={Toolbar}
      />
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
};

Main.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ app }) => ({
  isMobile: app.isMobile,
  menuIsOpen: app.menuIsOpen,
});

export default connect(mapStateToProps)(Main);
