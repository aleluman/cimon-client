import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { graphApi } from "./apis/graphApi";
import { processApi } from "./apis/processApi";
import positionsReducer from "./slices/positions";
import themeReducer from "./slices/theme";
import editorReducer from "./slices/editor";

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
    theme: themeReducer,
    editor: editorReducer,
    [processApi.reducerPath]: processApi.reducer,
    [graphApi.reducerPath]: graphApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graphApi.middleware).concat(processApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
