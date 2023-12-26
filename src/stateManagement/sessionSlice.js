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
      };
    },
    completeSession(state) {
      state.completeSession.push({ ...state.activeSession });
      state.activeSession = null;
    },
  },
});

export default sessionSlice.reducer;
