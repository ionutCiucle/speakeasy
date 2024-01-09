import { configureStore } from '@reduxjs/toolkit';

import layoutSlice from './layoutSlice';
import venueState from './venueSlice';
import sessionSlice from './sessionSlice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    session: sessionSlice,
    venue: venueState,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
