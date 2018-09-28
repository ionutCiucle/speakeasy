import React from 'react';
import SessionCard from '../components/SessionCard';
import { withStyles } from '@material-ui/core/styles';

class AllSessions extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      sessions: [
        { title: 'Ziua lui Gigi Kent', id: 1, time: '3 hours', cost: '70 lei', drinks: 3 },
        { title: 'Shadow', id: 2, time: '12 hours', cost: '170 lei', drinks: 20 },
        { title: 'Vineri', id: 3, time: '1 hour', cost: '10 lei', drinks: 1 },
        { title: 'Zorki', id: 4, time: '3 hours', cost: '70 lei', drinks: 3 },
        { title: 'Botez Satana', id: 5, time: '12 hours', cost: '170 lei', drinks: 20 },
        { title: 'Bar Mitzvah', id: 6, time: '1 hour', cost: '10 lei', drinks: 1 }
      ]
    };
  }

  renderSessionCards() {
    const { classes } = this.props;
    return this.state.sessions.map(({ id, title, time, cost, drinks }) => (
      <li
        key={id}
        className={classes.sessionCard}
      >
        <SessionCard
          id={id}  
          title={title}
          time={time}
          cost={cost}
          drinks={drinks}
        />
      </li>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <ul className={classes.allSessions}>{this.renderSessionCards()}</ul>
    );
  }
}

const styles = {
  allSessions: {
    padding: 10,
    listStyle: 'none',
    margin: 0,
    height: '100%'
  },
  sessionCard: {
    marginBottom: 10,
    ':last-child': {
      marginBottom: 0
    }
  }
};

export default withStyles(styles)(AllSessions);