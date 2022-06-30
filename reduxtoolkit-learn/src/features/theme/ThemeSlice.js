import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  color: "",
};

export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: initialStateValue,
  reducers: {
    changeTextColor: (state, action) => {
      state.color += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTextColor } = ThemeSlice.actions;

export default ThemeSlice.reducer;
