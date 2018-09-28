import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { rowFlexDisplay } from '../styling/mixins';

function TextIcon({ iconComponent, text, classes }) {
  const Icon = iconComponent;  
  
  return (
    <div className={classes.textIcon}>
      <Icon
        className={classes.icon}
        color="primary"
      />
      <Typography
        className={classes.text}
        variant="body1"
      >
        {text}
      </Typography>
    </div>
  );
}

const styles = {
  textIcon: {
    ...rowFlexDisplay
  },
  icon: {
    marginRight: 3
  },
  text: {
    fontWeight: 500
  }
};

export default withStyles(styles)(TextIcon);