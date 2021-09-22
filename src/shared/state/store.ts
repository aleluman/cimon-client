import create, { SetState } from "zustand";
import { QueryClient } from "react-query";
import { createEditorSlice, EditorSlice } from "./editor";
import { createRolePositionsSlice, RolePositionsSlice } from "./rolePositions";
import { createTemporaryItemsSlice, TemporaryItemsSlice } from "./temporaryItems";

export const queryClient = new QueryClient();

export type EditorStoreType = EditorSlice & RolePositionsSlice & TemporaryItemsSlice;

export const useEditor = create<EditorStoreType>((set) => ({
  ...createEditorSlice(set as unknown as SetState<EditorSlice>),
  ...createRolePositionsSlice(set as unknown as SetState<RolePositionsSlice>),
  ...createTemporaryItemsSlice(set as unknown as SetState<TemporaryItemsSlice>),
}));
