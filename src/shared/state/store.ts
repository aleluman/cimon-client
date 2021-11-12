import create, { GetState, SetState } from "zustand";
import { persist, StoreApiWithPersist } from "zustand/middleware";
import { QueryClient } from "react-query";
import { createEditorSlice, EditorSlice } from "./slices/editor";
import { createRolePositionsSlice, RolePositionsSlice } from "./slices/rolePositions";
import { createTemporaryItemsSlice, TemporaryItemsSlice } from "./slices/temporaryItems";
import { createPreferencessSlice, PreferencesSlice } from "./slices/preferences";
import { AuthSlice, createAuthSlice } from "./slices/auth";

export const queryClient = new QueryClient();

export type EditorStoreType = EditorSlice & RolePositionsSlice & TemporaryItemsSlice;

export const useEditor = create<EditorStoreType>((set) => ({
  ...createEditorSlice(set as unknown as SetState<EditorSlice>),
  ...createRolePositionsSlice(set as unknown as SetState<RolePositionsSlice>),
  ...createTemporaryItemsSlice(set as unknown as SetState<TemporaryItemsSlice>),
}));

export const usePreferences = create(
  persist<
    PreferencesSlice,
    SetState<PreferencesSlice>,
    GetState<PreferencesSlice>,
    StoreApiWithPersist<PreferencesSlice>
  >(
    (set) => ({
      ...createPreferencessSlice(set as unknown as SetState<PreferencesSlice>),
    }),
    { name: "preferences" }
  )
);

export const useAuth = create(
  persist<AuthSlice, SetState<AuthSlice>, GetState<AuthSlice>, StoreApiWithPersist<AuthSlice>>(
    (set) => ({
      ...createAuthSlice(set as unknown as SetState<AuthSlice>),
    }),
    { name: "auth" }
  )
);
