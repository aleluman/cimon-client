import { Position } from "../types/editor";

export const getMousePositionInCanvas = (
  zoom: number,
  translation: Position,
  mousePosition: Position
) => {
  return {
    x: (mousePosition.x - translation.x - 10) / zoom,
    y: (mousePosition.y - translation.y - 47) / zoom,
  };
};
