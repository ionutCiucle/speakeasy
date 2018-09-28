import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SessionFooter from '../components/SessionFooter';
import { columnFlexDisplay } from '../styling/mixins';

class Session extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, currentSession } = this.props;

    return (
      <section className={classes.session}>
        <Tabs
          className={classes.tabs}
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Session drinks"/>
          <Tab label="Register drink"/>
        </Tabs>
        <div className={classes.content}>
          Here will lie our drinks
        </div>
        <SessionFooter
          sessionName={currentSession.title}
          drinks={currentSession.drinks}
          cost={currentSession.cost}
        />
      </section>
    );
  }
}

const styles = {
  session: {
    width: '100%',
    height: '100%',
    ...columnFlexDisplay
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    ...columnFlexDisplay,
    padding: 10
  },
  tabs: {
    width: '100%',
    backgroundColor: 'white'
  }
};

function mapStateToProps(state) {
  return {
    currentSession: state.session.currentSession
  };
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Session);

// export default withStyles(styles)(Session);