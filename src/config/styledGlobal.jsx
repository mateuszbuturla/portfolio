import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
  }
  body {
    overflow-x: hidden;
  }
`;

const theme = {};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
