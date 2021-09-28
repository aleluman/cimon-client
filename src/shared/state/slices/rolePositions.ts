import produce from "immer";
import { SetState } from "zustand";
import { RolePosition } from "../../types/editor";

export type RolePositionsSlice = {
  rolePositions: Record<string, Record<RolePosition["id"], RolePosition>>;
  addAmbit: (ambitId: string) => void;
  setPosition: (position: RolePosition, ambitId: string) => void;
};

export const createRolePositionsSlice = (
  set: SetState<RolePositionsSlice>
): RolePositionsSlice => ({
  rolePositions: {},
  addAmbit: (ambitId) =>
    set(
      produce((state) => {
        state.rolePositions[ambitId] = {};
      })
    ),
  setPosition: (position, ambitId) =>
    set(
      produce((state) => {
        state.rolePositions[ambitId][position.id] = position;
      })
    ),
});
