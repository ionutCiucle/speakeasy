import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { rowFlexDisplay } from '../styling/mixins';
import TextIcon from './TextIcon';
import Paper from '@material-ui/core/Paper';

function SessionFooter({ sessionName, drinks, cost, classes }) {
  return (
    <footer className={classes.sessionFooter}>
      <Paper
        elevation={4}
        square
        className={classes.footerPaper}
      >
        <TextIcon
          iconComponent={EventIcon}
          text={sessionName}
        />
        <TextIcon
          iconComponent={CartIcon}
          text={drinks}
        />
        <TextIcon 
          iconComponent={PaymentIcon}
          text={cost}
        />
      </Paper>
    </footer>
  );
}

const styles = {
  sessionFooter: {
    width: '100%'
  },
  footerPaper: {
    width: '100%',
    ...rowFlexDisplay,
    padding: 10
  }
};

export default withStyles(styles)(SessionFooter);