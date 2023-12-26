import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import sessionSlice from "./sessionSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    session: sessionSlice,
  },
});
