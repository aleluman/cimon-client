import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "../../types/editor";

type EditorState = {
  zoom: number;
  translations: Position;
  activeItem: null | string;
};

const initialState: EditorState = {
  zoom: 1,
  translations: {
    x: 0,
    y: 0,
  },
  activeItem: null,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setTranslations: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.translations = action.payload;
    },
    setActiveItem: (state, action: PayloadAction<string | null>) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setZoom, setTranslations, setActiveItem } = editorSlice.actions;

export default editorSlice.reducer;
