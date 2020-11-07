import { SNACKBAR_AUTOHIDE_TIMEOUT, SNACKBAR_MAX_STACK } from 'config/constants'

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';
import theme from './config/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      maxSnack={SNACKBAR_MAX_STACK}
      autoHideDuration={SNACKBAR_AUTOHIDE_TIMEOUT}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Routes />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
