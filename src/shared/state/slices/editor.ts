import { SetState } from "zustand";
import { FlattenedService } from "@/shared/utils/allInteractions";
import { ActiveItem, AmbitType, Position } from "../../types/editor";

export type EditorSlice = {
  zoom: number;
  translations: Position;
  activeItem: ActiveItem;
  doingAction: boolean;
  selectedAmbit: AmbitType | null;
  mockupMode: boolean;
  showContact: boolean;
  showCall: "none" | "audio" | "video";
  selectedActor: { id: number; name: string; role: string } | null;
  stakeholderMode: boolean;
  focusMode: boolean;
  allRoleInteractions: FlattenedService[] | null;
  focusedRoles: string[];
  focusedInteractions: string[];
  setFocused: (value: { roles: string[]; interactions: string[] }) => void;
  setZoom: (newZoom: number) => void;
  setTranslations: (newTranslations: Position) => void;
  setActiveItem: (newActiveItem: ActiveItem) => void;
  setDoingAction: (value: boolean) => void;
  setSelectedAmbit: (ambit: AmbitType) => void;
  setMockupMode: (value: boolean) => void;
  setShowContact: (value: boolean) => void;
  setShowCall: (value: "none" | "audio" | "video") => void;
  setSelectedActor: (value: { id: number; name: string; role: string } | null) => void;
  reset: () => void;
  setStakeholderMode: (value: boolean) => void;
  setFocusMode: (value: boolean) => void;
  setAllRoleInteractions: (value: FlattenedService[] | null) => void;
};

export const createEditorSlice = (set: SetState<EditorSlice>): EditorSlice => ({
  zoom: 1,
  translations: { x: 0, y: 0 },
  activeItem: { id: "", type: "none" },
  doingAction: false,
  selectedAmbit: null,
  mockupMode: false,
  showContact: false,
  showCall: "none",
  selectedActor: null,
  stakeholderMode: false,
  allRoleInteractions: null,
  focusMode: false,
  focusedRoles: [],
  focusedInteractions: [],
  setZoom: (newZoom) => set(() => ({ zoom: newZoom })),
  setTranslations: (newTranslations) => set(() => ({ translations: newTranslations })),
  setActiveItem: (newActiveItem) => set(() => ({ activeItem: newActiveItem })),
  setDoingAction: (value) => set(() => ({ doingAction: value })),
  setSelectedAmbit: (ambit) => set(() => ({ selectedAmbit: ambit })),
  setMockupMode: (value) => set(() => ({ mockupMode: value })),
  setShowContact: (value) => set(() => ({ showContact: value })),
  setShowCall: (value) => set(() => ({ showCall: value })),
  setSelectedActor: (value) => set(() => ({ selectedActor: value })),
  setStakeholderMode: (value) => set(() => ({ stakeholderMode: value })),
  setAllRoleInteractions: (value) => set(() => ({ allRoleInteractions: value })),
  setFocusMode: (value) => set(() => ({ focusMode: value })),
  setFocused: ({ roles, interactions }) =>
    set(() => ({ focusedRoles: roles, focusedInteractions: interactions })),
  reset: () => {
    set(() => ({
      zoom: 1,
      translations: { x: 0, y: 0 },
      activeItem: { id: "", type: "none" },
      doingAction: false,
      selectedAmbit: null,
      showContact: false,
      showCall: "none",
      selectedActor: null,
      focusMode: false,
      focusedRoles: [],
      focusedInteractions: [],
    }));
  },
});
