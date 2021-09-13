import { Position } from "../types/editor";

const deltaModes = [1, 20, 1000];

/** Gets mouse position on html element from event */
export const getMousePosition = (event: MouseEvent, element: HTMLElement | null) => {
  if (!element) {
    return { x: event.clientX, y: event.clientY };
  }
  const rect = element.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

/** Calculates position and zoom on the mouse pointer. */
export const calcZoom = (
  mousePositions: Position,
  transforms: Position,
  currentZoom: number,
  deltaY: number,
  deltaMode: number
) => {
  const translatedX = transforms.x - mousePositions.x;
  const translatedY = transforms.y - mousePositions.y;
  const change = -deltaY * 0.0007 * deltaModes[deltaMode] + 1;
  const newZoom = currentZoom * change;
  const scaledX = translatedX * change;
  const scaledY = translatedY * change;
  return {
    newZoom,
    newX: scaledX + mousePositions.x,
    newY: scaledY + mousePositions.y,
  };
};
