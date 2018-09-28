import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Header from '../components/Header';
import AddNewSessionModal from './modals/AddNewSessionModal';
import { speakeasyTheme } from '../styling/theme';
import { lightGray } from '../styling/colors';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }
    
  toggleModalVisibility(show) {
    this.setState({ showModal: !!show });
  }

  render() {
    const { classes, children } = this.props;
    const { showModal } = this.state;

    return (
      <div className={classes.app}>
        <MuiThemeProvider theme={speakeasyTheme}>
          <AddNewSessionModal
            open={showModal}
            onClose={this.toggleModalVisibility.bind(this, false)}
          />
          <Header onStartSession={this.toggleModalVisibility.bind(this, true)}/> 
          <main className={classes.main}>
            {children}
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: lightGray
  },
  main: {
    flex: 1,
    width: '100%',
    padding: 10,
    overflow: 'auto'
  }
};

export default withStyles(styles)(App);