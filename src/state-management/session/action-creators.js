import { START_SESSION, END_SESSION } from './action-types';
export function startSession(title) {
  return {
    type: START_SESSION,
    title
  };
}

export function endSession() {
  return {
    type: END_SESSION
  };
}