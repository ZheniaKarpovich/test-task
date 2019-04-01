import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Filter from './Filter';
import Navigation from './NavigationPage';
import Toolbar from './Toolbar';
import Info from './Info';
import Jogs from './Jogs';

const Main = ({ menuIsOpen, filter }) => {
  if (menuIsOpen) {
    return <Navigation />;
  }

  return (
    <Fragment>
      <Header
        component={Toolbar}
      />
      {
        filter && <Filter />
      }
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
  filter: PropTypes.bool.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ app, jogs }) => ({
  filter: jogs.filter,
  isMobile: app.isMobile,
  menuIsOpen: app.menuIsOpen,
});

export default connect(mapStateToProps)(Main);
