import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cimonApi } from "./slices/api";
import positionsReducer from "./slices/positions";
import themeReducer from "./slices/theme";
import editorReducer from "./slices/editor";
import processReducer from "./slices/process";

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
    theme: themeReducer,
    editor: editorReducer,
    process: processReducer,
    [cimonApi.reducerPath]: cimonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cimonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
