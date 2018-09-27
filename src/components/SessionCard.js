import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

export default function SessionCard({ id, time, cost, drinks }) {
  return (
    <div>
      {`${time}, ${cost}, drinks: ${drinks}`}
    </div>
  );
}