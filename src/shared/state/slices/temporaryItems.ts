import { SetState } from "zustand";
import { PlaceholderInteraction, PlaceholderRoleType } from "../../types/editor";

export type TemporaryItemsSlice = {
  roleBeingHovered: string;
  placeholderInteraction: PlaceholderInteraction | null;
  placeholderRole: PlaceholderRoleType | null;
  setRoleBeingHovered: (id: string) => void;
  setPlaceholderInteraction: (value: PlaceholderInteraction | null) => void;
  setPlaceholderRole: (value: PlaceholderRoleType | null) => void;
};

export const createTemporaryItemsSlice = (
  set: SetState<TemporaryItemsSlice>
): TemporaryItemsSlice => ({
  roleBeingHovered: "",
  placeholderInteraction: null,
  placeholderRole: null,
  setRoleBeingHovered: (roleId) => set(() => ({ roleBeingHovered: roleId })),
  setPlaceholderInteraction: (value) => set(() => ({ placeholderInteraction: value })),
  setPlaceholderRole: (value) => set(() => ({ placeholderRole: value })),
});
