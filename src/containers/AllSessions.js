// @flow
import React from 'react';
import SessionCard from '../components/SessionCard';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import type { Session } from 'speakeasy-types';

type Props = {
  sessions: Session[],
  classes: Object
};

class AllSessions extends React.PureComponent<Props> {
  renderSessionCards() {
    const { classes, sessions } = this.props;

    return sessions.map(({ id, title, time, cost, drinks }) => (
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

function mapStateToProps(state) {
  return {
    sessions: state.session.sessions
  };
}

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(AllSessions);