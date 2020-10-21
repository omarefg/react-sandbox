import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OptimizeYourReactAppFrom } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={OptimizeYourReactAppFrom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
