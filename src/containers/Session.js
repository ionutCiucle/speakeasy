import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    const { classes } = this.props;

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
          <Tab label="Drinks"/>
          <Tab label="Register drink"/>
        </Tabs>
        <div className={classes.content}>
          Here will lie our drinks
        </div>
        <SessionFooter
          sessionName="My Session"
          drinks={5}
          cost="69 lei"
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

export default withStyles(styles)(Session);