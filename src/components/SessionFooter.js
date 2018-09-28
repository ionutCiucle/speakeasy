import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { rowFlexDisplay } from '../styling/mixins';
import TextIcon from './TextIcon';
import { white } from '../styling/colors';

function SessionFooter({ sessionName, drinks, cost, classes }) {
  return (
    <footer className={classes.sessionFooter}>
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
    </footer>
  );
}

const styles = {
  sessionFooter: {
    padding: 10,
    width: '100%',
    backgroundColor: white,
    ...rowFlexDisplay
  }
};

export default withStyles(styles)(SessionFooter);