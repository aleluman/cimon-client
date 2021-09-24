import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";
import { QueryClient } from "react-query";
import { createEditorSlice, EditorSlice } from "./slices/editor";
import { createRolePositionsSlice, RolePositionsSlice } from "./slices/rolePositions";
import { createTemporaryItemsSlice, TemporaryItemsSlice } from "./slices/temporaryItems";
import { createPreferencessSlice, PreferencesSlice } from "./slices/preferences";

export const queryClient = new QueryClient();

export type EditorStoreType = EditorSlice & RolePositionsSlice & TemporaryItemsSlice;

export const useEditor = create<EditorStoreType>((set) => ({
  ...createEditorSlice(set as unknown as SetState<EditorSlice>),
  ...createRolePositionsSlice(set as unknown as SetState<RolePositionsSlice>),
  ...createTemporaryItemsSlice(set as unknown as SetState<TemporaryItemsSlice>),
}));

export const usePreferences = create<PreferencesSlice>(
  persist(
    (set) => ({
      ...createPreferencessSlice(set as unknown as SetState<PreferencesSlice>),
    }),
    { name: "preferences" }
  )
);
