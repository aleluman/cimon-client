import create, { SetState } from "zustand";
import { QueryClient } from "react-query";
import { createEditorSlice, EditorSlice } from "./editor";
import { createRolePositionsSlice, RolePositionsSlice } from "./rolePositions";
import { createTemporaryItemsSlice, TemporaryItemsSlice } from "./temporaryItems";

export const queryClient = new QueryClient();

export type StoreType = EditorSlice & RolePositionsSlice & TemporaryItemsSlice;

export const useStore = create<StoreType>((set) => ({
  ...createEditorSlice(set as unknown as SetState<EditorSlice>),
  ...createRolePositionsSlice(set as unknown as SetState<RolePositionsSlice>),
  ...createTemporaryItemsSlice(set as unknown as SetState<TemporaryItemsSlice>),
}));
