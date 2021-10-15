import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import mainBG from '../assets/mainBG.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
  }
  body {
    overflow-x: hidden;
    background: url(${mainBG});
  }
`;

const theme = {
  colors: {
    bg: '#121212',
    fontFirst: '#FFFFFF',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);

export default Theme;
