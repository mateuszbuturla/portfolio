import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './config/styledGlobal';
import Home from './views/home';

function App() {
  return (
    <Theme>
      <Home />
    </Theme>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
