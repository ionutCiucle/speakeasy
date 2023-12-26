import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import layoutSlice from "./layoutSlice";
import sessionSlice from "./sessionSlice";
import menuSlice from "./menuSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    session: sessionSlice,
    menu: menuSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
