import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import PreviousSession from './containers/PreviousSessions';

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
              component={PreviousSession}
            />
          </App>
        )}
      />
    </BrowserRouter>
  );
}