import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace, monospace;
    font-family: 'Hack', consolas;
}
`;

const theme = {
  colors: {
    primary: 'green',
    secondary: 'red',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
