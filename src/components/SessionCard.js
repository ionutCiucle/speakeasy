import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PaymentIcon from '@material-ui/icons/Payment';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

function SessionCard({ time, cost, drinks, classes }) {
  function renderDetail(Icon, value) {
    return (
      <li className={classes.cardDetail}>
        <Icon className={classes.icon}/>
        <Typography variant="body1">{value}</Typography>
      </li>
    );
  }

  return ( 
    <Card> 
      <CardContent>
        <div className={classes.cardTitle}>
          <Typography variant="headline">
            Wednesday, 30/01/2019
          </Typography>
        </div>
        <Divider/>
        <ul className={classes.cardDetails}>
          {renderDetail(ScheduleIcon, time)}
          {renderDetail(PaymentIcon, cost)}
          {renderDetail(CartIcon, drinks)}
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
    display: 'flex',
    alignItems: 'center',
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
    marginRight: 10
  }
};

export default withStyles(styles)(SessionCard);