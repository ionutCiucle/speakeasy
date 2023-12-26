import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSession: null,
  completedSessions: [],
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    startSession(state, payload) {
      state.activeSession = {
        id: Date.now(),
        name: payload.name,
        startDate: Date.now(),
        endDate: null,
      };
    },
    completeSession(state) {
      state.completedSessions.push({
        ...state.activeSession,
        endDate: Date.now(),
      });
      state.activeSession = null;
    },
  },
});

export const { startSession, completeSession } = sessionSlice.actions;

export default sessionSlice.reducer;
