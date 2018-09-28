import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route 
        path="/" 
        render={() => (
          <App>
            <Route 
              exact 
              path="/"
              component={Home}
            />
          </App>
        )}
      />
    </BrowserRouter>
  );
}