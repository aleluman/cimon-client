import { useEditor, usePreferences } from "../state/store";
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

export const setFit = (ambitId: string) => {
  const sideBarHidden = !usePreferences.getState().showSidebar;
  const nodes = Object.values(useEditor.getState().rolePositions[ambitId]);
  if (nodes.length !== 0) {
    const positionSum = nodes.reduce(
      (prev, curr) => {
        return { x: curr.x + prev.x, y: curr.y + prev.y };
      },
      { x: 0, y: 0 }
    );
    const stageTranslations = useEditor.getState().translations;
    const xAvg = positionSum.x / nodes.length + stageTranslations.x;
    const yAvg = positionSum.y / nodes.length + stageTranslations.y;
    const { innerHeight, innerWidth } = window;
    const trueWidth = innerWidth - (sideBarHidden ? 0 : 20 * 16);
    useEditor.setState({ doingAction: true });
    useEditor.setState({ zoom: 1 });
    useEditor.setState({
      translations: {
        x: trueWidth / 2 - xAvg + stageTranslations.x - 16 * 4,
        y: innerHeight / 2 - yAvg + stageTranslations.y - 16 * 2.5 - 38,
      },
    });
  }
};
