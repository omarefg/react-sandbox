import React from 'react';
import { render } from 'react-dom';
import App from './App';

const container = document.getElementById('app');

function renderApp() {
  render(<App />, container);
}

renderApp();

module.hot?.accept('./App', () => {
  renderApp();
});
