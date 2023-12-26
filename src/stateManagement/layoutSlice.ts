import { createSlice } from "@reduxjs/toolkit";

type LayoutState = {
  showConfigPanel: boolean;
};

const initialState: LayoutState = {
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
