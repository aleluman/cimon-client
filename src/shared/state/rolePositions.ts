import produce from "immer";
import { SetState } from "zustand";
import { RolePosition } from "../types/editor";

export type RolePositionsSlice = {
  rolePositions: Record<RolePosition["id"], RolePosition>;
  setPosition: (position: RolePosition) => void;
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
});
