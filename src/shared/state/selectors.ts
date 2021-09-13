import { RootState } from "./store";

export const positionSelector = (id: string) => (state: RootState) => state.positions[id];

export const zoomSelector = (state: RootState) => state.editor.zoom;

export const activeItemSelector = (state: RootState) => state.editor.activeItem;

export const translationsSelector = (state: RootState) => state.editor.translations;
