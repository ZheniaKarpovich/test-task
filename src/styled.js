import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-display: swap;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.lightBlack};
  }

  a:visited {
    color: ${theme.colors.lightBlack};
  }

  #root {
    height: 100%;
    color: ${theme.colors.lightBlack};
    font-size: 14px;
  }
`;

export default GlobalStyle;
