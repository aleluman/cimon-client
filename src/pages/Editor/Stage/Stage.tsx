import { ReactNode, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { Container, Background, ChildContainer } from "./styles";
import { calcZoom, getMousePosition } from "@/shared/utils/zoom";
import { zoomLimits } from "@/shared/constants/editorConfigs";
import { useEditor } from "@/shared/state/store";

type StageProps = {
  children: ReactNode;
};

export const Stage = ({ children }: StageProps) => {
  const { x, y } = useEditor((state) => state.translations);
  const zoom = useEditor((state) => state.zoom);
  const setZoom = useEditor((state) => state.setZoom);
  const setTranslations = useEditor((state) => state.setTranslations);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const setDoingAction = useEditor((state) => state.setDoingAction);

  const stageHandlers = useGesture({
    onDragStart: () => setDoingAction(true),
    onDrag: ({ event, delta: [dx, dy] }) => {
      if (event.currentTarget === event.target) {
        setTranslations({ x: x + dx, y: y + dy });
      }
    },
    onDragEnd: ({ event, tap }) => {
      if (event.currentTarget === event.target && tap) {
        setActiveItem({ id: "", type: "none" });
      }
      setDoingAction(false);
    },
    onWheel: ({ event, active }) => {
      const { deltaY, deltaMode } = event;
      const mouseCoords = getMousePosition(event, backgroundRef.current);
      const { newZoom, newX, newY } = calcZoom(mouseCoords, { x, y }, zoom, deltaY, deltaMode);
      if (!active) setDoingAction(false);
      if (active && newZoom >= zoomLimits.min && newZoom <= zoomLimits.max) {
        setTranslations({ x: newX, y: newY });
        setDoingAction(true);
        setZoom(newZoom);
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
