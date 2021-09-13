import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RolePosition } from "../../types/editor";

const initialState: Record<RolePosition["id"], RolePosition> = {};

export const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {
    addAll: (state, action: PayloadAction<RolePosition[]>) => {
      action.payload.forEach((position) => {
        state[position.id] = position;
      });
    },
    updatePosition: (state, action: PayloadAction<RolePosition>) => {
      const { id, x, y } = action.payload;
      state[id] = { id, x, y };
    },
    deletePosition: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    clear: () => {
      return {};
    },
  },
});

export const { addAll, updatePosition, deletePosition, clear } = positionsSlice.actions;

export default positionsSlice.reducer;
