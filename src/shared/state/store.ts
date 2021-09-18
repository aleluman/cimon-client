import create, { SetState } from "zustand";
import { QueryClient } from "react-query";
import { createEditorSlice, EditorSlice } from "./editor";
import { createRolePositionsSlice, RolePositionsSlice } from "./rolePositions";

export const queryClient = new QueryClient();

export type StoreType = EditorSlice & RolePositionsSlice;

export const useStore = create<StoreType>((set) => ({
  ...createEditorSlice(set as unknown as SetState<EditorSlice>),
  ...createRolePositionsSlice(set as unknown as SetState<RolePositionsSlice>),
}));
