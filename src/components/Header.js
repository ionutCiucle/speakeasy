import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FlighLandIcon from '@material-ui/icons/FlightLand';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function Header({ classes, sessionInProgress, onStartSession, onEndSession }) {
  return (
    <AppBar
      color="primary"
      position="relative"
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <FlighLandIcon
            color="secondary"
            className={classes.icon}
          />
          <Typography
            variant="title"
            className={classes.title}
            color="secondary"
          >
            Speakeasy
          </Typography>
        </div>
        { !sessionInProgress ? (
          <Button
            color="secondary"
            onClick={onStartSession}
          >
          Start new session
          </Button>
        ) : (
          <Button
            color="secondary"
            onClick={onEndSession}
          >
            <Link to="/">End session</Link>
          </Button>
        ) }
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