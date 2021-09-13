import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<typeof initialState>) => {
      state = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
