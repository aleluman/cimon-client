import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProcessType = {
  id: string;
  name: string;
  ambits: { id: string; name: string }[];
  roles: { name: string; type: "Human" | "Service" | "Repository" }[];
};

const initialState: ProcessType = {
  id: "",
  name: "",
  ambits: [],
  roles: [],
};

export const processSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    setProcess: (state, action: PayloadAction<ProcessType>) => {
      state = action.payload;
    },
  },
});

export const { setProcess } = processSlice.actions;

export default processSlice.reducer;
