import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showConfigPanel: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleConfigPanelVisibility(state) {
      state.showConfigPanel = !state.showConfigPanel;
    },
  },
});

export const { toggleConfigPanelVisibility } = layoutSlice.actions;

export default layoutSlice.reducer;
