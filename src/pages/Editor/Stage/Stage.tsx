import { ReactNode, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { Container, Background, ChildContainer } from "./styles";
import { calcZoom, getMousePosition } from "@/shared/utils/zoom";
import { zoomLimits } from "@/shared/constants/editorConfigs";
import { useStore } from "@/shared/state/store";

type StageProps = {
  children: ReactNode;
};

export const Stage = ({ children }: StageProps) => {
  const { x, y } = useStore((state) => state.translations);
  const zoom = useStore((state) => state.zoom);
  const setZoom = useStore((state) => state.setZoom);
  const setTranslations = useStore((state) => state.setTranslations);
  const setActiveItemId = useStore((state) => state.setActiveItemId);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const stageHandlers = useGesture(
    {
      onDrag: ({ event, delta: [dx, dy] }) => {
        if (event.currentTarget === event.target) {
          setTranslations({ x: x + dx, y: y + dy });
        }
      },
      onWheel: ({ event, active }) => {
        const { deltaY, deltaMode } = event;
        const mouseCoords = getMousePosition(event, backgroundRef.current);
        const { newZoom, newX, newY } = calcZoom(mouseCoords, { x, y }, zoom, deltaY, deltaMode);
        if (active && newZoom >= zoomLimits.min && newZoom <= zoomLimits.max) {
          setTranslations({ x: newX, y: newY });
          setZoom(newZoom);
        }
      },
      onClick: ({ event }) => {
        if (event.currentTarget === event.target) {
          setActiveItemId("");
        }
      },
      onContextMenu: ({ event }) => {
        event.preventDefault();
      },
    },
    { drag: { filterTaps: true } }
  );

  return (
    <Container>
      <Background ref={backgroundRef} {...stageHandlers()} />
      <ChildContainer x={x} y={y} zoom={zoom}>
        {children}
      </ChildContainer>
    </Container>
  );
};
