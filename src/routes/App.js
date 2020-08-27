import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import * as routes from './routes';
import GlobalStyle from '../themes/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path={routes.home} component={Home} />
    </BrowserRouter>
  );
}

export default App;
