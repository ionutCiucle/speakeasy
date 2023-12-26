import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import sessionSlice from "./sessionSlice";
import menuSlice from "./menuSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    session: sessionSlice,
    menu: menuSlice,
  },
});
