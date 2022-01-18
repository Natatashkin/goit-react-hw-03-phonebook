import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from './baseStyles/theme';
import GlobalStyle from './baseStyles/GlobalStyles';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App title="Phonebook" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
