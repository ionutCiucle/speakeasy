import { START_SESSION } from './action-types';

const initialState = {
  sessions: [{
    id: '2193820398203',
    title: 'SomeTitle',
    time: '2h',
    endDate: '',
    cost: '30 lei',
    drinks: 4
  }]
};

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case START_SESSION: {
      return {
        ...state,
        sessions: state.sessions.concat([{
          id: Date.now(),
          title: action.title,
          time: '',
          cost: '',
          drinks: 0
        }])
      };
    }

    default: {
      return state;
    }
  }
}