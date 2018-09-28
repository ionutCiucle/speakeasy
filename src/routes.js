import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import AllSessions from './containers/AllSessions';
import Session from './containers/Session';

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
              component={AllSessions}
            />
            <Route
              path="/session"
              component={Session}
            />
          </App>
        )}
      />
    </BrowserRouter>
  );
}