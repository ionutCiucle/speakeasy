import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AlarmIcon from '@material-ui/icons/Alarm';
import FlighLandIcon from '@material-ui/icons/FlightLand';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function Header({ classes }) {
  return (
    <AppBar color="primary">
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <FlighLandIcon color="secondary" className={classes.icon}/>
          <Typography variant="title" className={classes.title} color="secondary">
            Speakeasy
          </Typography>
        </div>
        <Button color="secondary">
          <AlarmIcon className={classes.icon}/>
          Start new session
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  icon: {
    marginRight: 10
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default withStyles(styles)(Header);