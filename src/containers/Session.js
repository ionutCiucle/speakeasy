import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SessionFooter from '../components/SessionFooter';
import { columnFlexDisplay } from '../styling/mixins';

class Session extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.session}>
        Here we'll have our session view
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
  }
};

export default withStyles(styles)(Session);