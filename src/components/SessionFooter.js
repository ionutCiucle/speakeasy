import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { rowFlexDisplay } from '../styling/mixins';

function SessionFooter({ sessionName, drinks, cost, classes }) {
  return (
    <footer className={classes.sessionFooter}>
      {`${sessionName}, ${drinks}, ${cost}`}
    </footer>
  );
}

const styles = {
  sessionFooter: {
    width: '100%',
    ...rowFlexDisplay
  }
};

export default withStyles(styles)(SessionFooter);