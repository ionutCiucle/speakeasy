import { createSlice } from "@reduxjs/toolkit";
import { DrinkType, ServingType } from "./enums";

const initialState = {
  showConfigPanel: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleConfigPanelVisibility(state) {
      state.showConfigPanel = !state.showConfigPanel;
    },
  },
});

export default generalSlice.reducer;
