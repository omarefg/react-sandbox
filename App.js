import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home,
  OptimizeYourReactApp,
} from './routes';

import {
  optimizeYourReactAppRoute,
  homeRoute,
} from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={homeRoute}
          component={Home}
          exact
        />
        <Route
          path={optimizeYourReactAppRoute}
          component={OptimizeYourReactApp}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
