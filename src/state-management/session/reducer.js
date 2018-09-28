import { START_SESSION, END_SESSION } from './action-types';

const initialState = {
  sessionInProgress: false,
  currentSession: null,
  sessions: [{
    id: Date.now(),
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
        sessionInProgress: true,
        currentSession: {
          id: Date.now(),
          title: action.title,
          endDate: '',
          time: '',
          cost: '0 lei',
          drinks: 0
        }
      };
    }

    case END_SESSION: {
      return {
        ...state,
        sessionInProgress: false,
        currentSession: null,
        sessions: state.sessions.concat([{
          ...state.currentSession,
          endDate: Date.now(),
          time: Date.now() - state.currentSession.id
        }])
      };
    }

    default: {
      return state;
    }
  }
}