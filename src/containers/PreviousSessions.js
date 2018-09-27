import React from 'react';
import SessionCard from '../components/SessionCard';

export default class PreviousSession extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      sessions: [
        { id: 1, time: '3 hours', cost: '70 lei', drinks: 3 },
        { id: 2, time: '12 hours', cost: '170 lei', drinks: 20 },
        { id: 3, time: '1 hour', cost: '10 lei', drinks: 1 }
      ]
    };
  }

  renderSessionCards() {
    return this.state.sessions.map(({ id, time, cost, drinks }) => (
      <SessionCard
        key={id}
        id={id}  
        time={time}
        cost={cost}
        drinks={drinks}
      />
    ));
  }

  render() {
    return (
      <section>
        {this.renderSessionCards()}
      </section>
    );
  }
}