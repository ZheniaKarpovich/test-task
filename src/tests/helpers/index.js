import React from 'react';
import { mount } from 'enzyme';
import { runSaga } from 'redux-saga';
import { Form } from 'react-final-form';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from 'redux/configureStore';

const store = configureStore();

export const mountWithTheme = (node, thm) => mount((
  <ThemeProvider theme={thm}>
    { node }
  </ThemeProvider>
));

export const mountWithThemeAndStore = (node, thm) => mountWithTheme((
  <Provider store={store}>
    <Router>
      { node }
    </Router>
  </Provider>
), thm);

export const mountAsPartOfForm = (node, thm) => mount((
  <Form
    onSubmit={() => {}}
    render={() => (
      <ThemeProvider theme={thm}>
        { node }
      </ThemeProvider>
    )}
  />
));

export const recordSaga = async (saga, initialAction = {}, initialState = {}, effectMiddlewares = []) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => initialState,
      effectMiddlewares,
    },
    saga,
    initialAction,
  ).toPromise();

  return dispatched;
};
