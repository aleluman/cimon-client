import produce from "immer";
import { SetState } from "zustand";
import { RolePosition } from "../../types/editor";

export type RolePositionsSlice = {
  rolePositions: Record<RolePosition["id"], RolePosition>;
  setPosition: (position: RolePosition) => void;
  deletePosition: (id: string) => void;
};

export const createRolePositionsSlice = (
  set: SetState<RolePositionsSlice>
): RolePositionsSlice => ({
  rolePositions: {},
  setPosition: (position: RolePosition) =>
    set(
      produce((state) => {
        state.rolePositions[position.id] = position;
      })
    ),
  deletePosition: (id) =>
    set(
      produce((state) => {
        delete state.rolePositions[id];
      })
    ),
});
