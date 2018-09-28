import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PaymentIcon from '@material-ui/icons/Payment';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import TextIcon from './TextIcon';

function SessionCard({ title, time, cost, drinks, classes }) {
  return ( 
    <Card> 
      <CardContent>
        <section className={classes.cardTitle}>
          <Typography 
            variant="headline"
            className={classes.text}
          >
            {title}
          </Typography>
          <Typography variant="body1">30/01/2019</Typography>
        </section>
        <Divider/>
        <ul className={classes.cardDetails}>
          <TextIcon
            iconComponent={ScheduleIcon}
            text={time}
          />
          <TextIcon
            iconComponent={PaymentIcon}
            text={cost}
          />
          <TextIcon
            iconComponent={CartIcon}
            text={drinks}
          />
        </ul>
      </CardContent>
    </Card>
  );
}

const flexDisplay = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const styles = {
  cardTitle: {
    ...flexDisplay,
    paddingBottom: 15
  },
  cardDetails: {
    padding: '15px 0 0 0',
    listStyle: 'none',
    margin: 0,
    ...flexDisplay
  },
  cardDetail: {
    ...flexDisplay
  },
  icon: {
    marginRight: 5
  },
  text: {
    fontWeight: 500
  }
};

export default withStyles(styles)(SessionCard);