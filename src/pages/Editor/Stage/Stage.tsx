import { ReactNode, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { Container, Background, ChildContainer } from "./styles";
import { calcZoom, getMousePosition } from "@/shared/utils/zoom";
import { zoomLimits } from "@/shared/configs/editorConfigs";
import { useStore } from "@/shared/state/store";

type StageProps = {
  children: ReactNode;
};

export const Stage = ({ children }: StageProps) => {
  const { x, y } = useStore((state) => state.translations);
  const zoom = useStore((state) => state.zoom);
  const setZoom = useStore((state) => state.setZoom);
  const setTranslations = useStore((state) => state.setTranslations);
  const setActiveItem = useStore((state) => state.setActiveItem);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const stageHandlers = useGesture({
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
        setActiveItem({ id: "", type: "none" });
      }
    },
    onContextMenu: ({ event }) => {
      event.preventDefault();
    },
  });

  return (
    <Container>
      <Background ref={backgroundRef} {...stageHandlers()} />
      <ChildContainer css={{ transform: `translate3d(${x}px,${y}px,0) scale(${zoom})` }}>
        {children}
      </ChildContainer>
    </Container>
  );
};
