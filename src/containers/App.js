import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
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

  // move the modal visiblity property in a layout reducer
  getToggleModalVisibilityHandler = (show) => () => {
    this.setState({ showModal: !!show });
  }

  render() {
    const { classes, children, sessionInProgress } = this.props;
    const { showModal } = this.state;

    return (
      <div className={classes.app}>
        <MuiThemeProvider theme={speakeasyTheme}>
          <AddNewSessionModal
            open={showModal}
            onClose={this.getToggleModalVisibilityHandler(false)}
          />
          <Header
            sessionInProgress={sessionInProgress} 
            onStartSession={this.getToggleModalVisibilityHandler(true)}
          /> 
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
    overflow: 'auto'
  }
};

function mapStateToProps(state) {
  return {
    sessionInProgress: state.session.currentSession !== null
  };
}

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(App);