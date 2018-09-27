import React from 'react';
import Header from '../components/Header';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { speakeasyTheme } from '../theme';

function App({ classes }) {
  return (
    <div className={classes.app}>
      <MuiThemeProvider theme={speakeasyTheme}>
        <Header/>
        <main className={classes.main}>
          Here will lie all of speakeasy
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
    width: '100%'
  }
};

export default withStyles(styles)(App);