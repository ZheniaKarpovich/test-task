import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import AppRouter from './router';
import GlobalStyle from './styled';
import configureStore from './redux/configureStore';
import theme from './theme';

const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root'),
);
