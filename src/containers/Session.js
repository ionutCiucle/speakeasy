import React from 'react';
import { withStyles } from '@material-ui/core/styles';

class Session extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.section}>
        Here we'll have our session view
      </section>
    );
  }
}

const styles = {
  session: {
    width: '100%',
    height: '100%'
  }
};

export default withStyles(styles)(Session);