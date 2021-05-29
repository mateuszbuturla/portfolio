import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import NukuNukuFont from '../assets/NUKU1.TTF';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nuku Nuku';
    src: local('Nuku Nuku'), local('NukuNuku'),
    url(${NukuNukuFont}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    font-family: 'Nuku Nuku';
  }
  body {
    overflow-x: hidden;
  }
`;

const theme = {
  colors: {
    bg: '#060607',
    fontFirst: '#FFFFFF',
    fontSecond: '#7D7D7D',
    fontThird: '#141414',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
