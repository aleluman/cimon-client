import { SetState } from "zustand";
import { PlaceholderInteraction } from "../types/editor";

export type TemporaryItemsSlice = {
  roleBeingHovered: string;
  showPlaceholderInteraction: boolean;
  showPlaceholderRole: boolean;
  placeholderInteraction: PlaceholderInteraction;
  setRoleBeingHovered: (id: string) => void;
  setShowPlaceholderInteraction: (value: boolean) => void;
  setShowPlaceholderRole: (value: boolean) => void;
  setPlaceholderInteraction: (value: PlaceholderInteraction) => void;
};

export const createTemporaryItemsSlice = (
  set: SetState<TemporaryItemsSlice>
): TemporaryItemsSlice => ({
  roleBeingHovered: "",
  showPlaceholderInteraction: false,
  showPlaceholderRole: false,
  placeholderInteraction: { startNodeId: "", start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
  setRoleBeingHovered: (roleId) => set(() => ({ roleBeingHovered: roleId })),
  setShowPlaceholderInteraction: (value) => set(() => ({ showPlaceholderInteraction: value })),
  setShowPlaceholderRole: (value) => set(() => ({ showPlaceholderRole: value })),
  setPlaceholderInteraction: (value) => set(() => ({ placeholderInteraction: value })),
});
