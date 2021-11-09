import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './App';
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
