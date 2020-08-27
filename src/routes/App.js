import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import * as routes from './routes';
import GlobalStyle from '../themes/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.login} component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
