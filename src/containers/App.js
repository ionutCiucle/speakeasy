import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Header from '../components/Header';
import { speakeasyTheme } from '../styling/theme';

function App({ classes, children }) {
  return (
    <div className={classes.app}>
      <MuiThemeProvider theme={speakeasyTheme}>
        <Header/> 
        <main className={classes.main}>
          {children}
        </main>
      </MuiThemeProvider>
    </div>
  );
}

const styles = {
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    width: '100%',
    padding: 10
  }
};

export default withStyles(styles)(App);