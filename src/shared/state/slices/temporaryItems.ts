import { SetState } from "zustand";
import { PlaceholderInteraction, PlaceholderRoleType } from "../../types/editor";

export type TemporaryItemsSlice = {
  netWorkError: boolean;
  roleBeingHovered: string;
  placeholderInteraction: PlaceholderInteraction | null;
  placeholderRole: PlaceholderRoleType | null;
  setRoleBeingHovered: (id: string) => void;
  setPlaceholderInteraction: (value: PlaceholderInteraction | null) => void;
  setPlaceholderRole: (value: PlaceholderRoleType | null) => void;
  setNetworkError: (value: boolean) => void;
};

export const createTemporaryItemsSlice = (
  set: SetState<TemporaryItemsSlice>
): TemporaryItemsSlice => ({
  netWorkError: false,
  roleBeingHovered: "",
  placeholderInteraction: null,
  placeholderRole: null,
  setRoleBeingHovered: (roleId) => set(() => ({ roleBeingHovered: roleId })),
  setPlaceholderInteraction: (value) => set(() => ({ placeholderInteraction: value })),
  setPlaceholderRole: (value) => set(() => ({ placeholderRole: value })),
  setNetworkError: (value) => set(() => ({ netWorkError: value })),
});
