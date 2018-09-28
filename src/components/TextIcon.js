import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { rowFlexDisplay } from '../styling/mixins';

function TextIcon({ iconComponent, text, classes }) {
  const Icon = iconComponent;  
  
  return (
    <div className={classes.textIcon}>
      <Icon className={classes.icon}/>
      <Typography variant="body1">{text}</Typography>
    </div>
  );
}

const styles = {
  textIcon: {
    ...rowFlexDisplay
  },
  icon: {
    marginRight: 5
  }
};

export default withStyles(styles)(TextIcon);