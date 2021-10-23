import { SetState } from "zustand";
import { ActiveItem, AmbitType, Position } from "../../types/editor";

export type EditorSlice = {
  zoom: number;
  translations: Position;
  activeItem: ActiveItem;
  doingAction: boolean;
  selectedAmbit: AmbitType | null;
  mockupMode: boolean;
  setZoom: (newZoom: number) => void;
  setTranslations: (newTranslations: Position) => void;
  setActiveItem: (newActiveItem: ActiveItem) => void;
  setDoingAction: (value: boolean) => void;
  setSelectedAmbit: (ambit: AmbitType) => void;
  setMockupMode: (value: boolean) => void;
};

export const createEditorSlice = (set: SetState<EditorSlice>): EditorSlice => ({
  zoom: 1,
  translations: { x: 0, y: 0 },
  activeItem: { id: "", type: "none" },
  doingAction: false,
  selectedAmbit: null,
  mockupMode: false,
  setZoom: (newZoom) => set(() => ({ zoom: newZoom })),
  setTranslations: (newTranslations) => set(() => ({ translations: newTranslations })),
  setActiveItem: (newActiveItem) => set(() => ({ activeItem: newActiveItem })),
  setDoingAction: (value) => set(() => ({ doingAction: value })),
  setSelectedAmbit: (ambit) => set(() => ({ selectedAmbit: ambit })),
  setMockupMode: (value) => set(() => ({ mockupMode: value })),
});
