import { SetState } from "zustand";
import { PlaceholderInteraction, PlaceholderRoleType } from "../types/editor";

export type TemporaryItemsSlice = {
  roleBeingHovered: string;
  showPlaceholderInteraction: boolean;
  placeholderInteraction: PlaceholderInteraction;
  placeholderRole: PlaceholderRoleType | null;
  setRoleBeingHovered: (id: string) => void;
  setShowPlaceholderInteraction: (value: boolean) => void;
  setPlaceholderInteraction: (value: PlaceholderInteraction) => void;
  setPlaceholderRole: (value: PlaceholderRoleType | null) => void;
};

export const createTemporaryItemsSlice = (
  set: SetState<TemporaryItemsSlice>
): TemporaryItemsSlice => ({
  roleBeingHovered: "",
  showPlaceholderInteraction: false,
  placeholderInteraction: { startNodeId: "", start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
  placeholderRole: null,
  setRoleBeingHovered: (roleId) => set(() => ({ roleBeingHovered: roleId })),
  setShowPlaceholderInteraction: (value) => set(() => ({ showPlaceholderInteraction: value })),
  setPlaceholderInteraction: (value) => set(() => ({ placeholderInteraction: value })),
  setPlaceholderRole: (value) => set(() => ({ placeholderRole: value })),
});
