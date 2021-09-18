import create from "zustand";
import { produce } from "immer";
import { QueryClient } from "react-query";
import { Position, RolePosition } from "../types/editor";

export const queryClient = new QueryClient();

type StoreType = {
  rolePositions: Record<RolePosition["id"], RolePosition>;
  zoom: number;
  activeItemId: string;
  translations: Position;
  setPosition: (position: RolePosition) => void;
  setZoom: (newZoom: number) => void;
  setActiveItemId: (newId: string) => void;
  setTranslations: (newTranslations: Position) => void;
};

export const useStore = create<StoreType>((set) => ({
  rolePositions: {},
  zoom: 1,
  activeItemId: "",
  translations: { x: 0, y: 0 },
  setPosition: (position) =>
    set(
      produce((state) => {
        state.rolePositions[position.id] = position;
      })
    ),
  setZoom: (newZoom: number) => set(() => ({ zoom: newZoom })),
  setActiveItemId: (newId: string) => set(() => ({ activeItemId: newId })),
  setTranslations: (newTranslations) => set(() => ({ translations: newTranslations })),
}));
