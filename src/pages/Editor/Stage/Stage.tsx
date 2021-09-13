import React, { ReactNode, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { Container, Background, ChildContainer } from "./styles";
import { setActiveItem, setTranslations, setZoom } from "@/shared/state/editor";
import { calcZoom, getMousePosition } from "@/shared/utils/zoom";
import { zoomLimits } from "@/shared/constants/editorConfigs";

type StageProps = {
  children: ReactNode;
};

export const Stage = ({ children }: StageProps) => {
  const translations = useAppSelector((state) => state.editor.translations);
  const zoom = useAppSelector((state) => state.editor.zoom);
  const dispatch = useAppDispatch();
  const backgroundRef = useRef<HTMLDivElement>(null);

  const stageHandlers = useGesture(
    {
      onDrag: ({ event, delta: [dx, dy] }) => {
        if (event.currentTarget === event.target) {
          dispatch(
            setTranslations({ x: translations.x + dx, y: translations.y + dy })
          );
        }
      },
      onWheel: ({ event, active }) => {
        const { deltaY, deltaMode } = event;
        const { x: mouseX, y: mouseY } = getMousePosition(
          event,
          backgroundRef.current
        );
        const { newZoom, x, y } = calcZoom(
          mouseX,
          mouseY,
          translations,
          zoom,
          deltaY,
          deltaMode
        );
        if (active && newZoom >= zoomLimits.min && newZoom <= zoomLimits.max) {
          dispatch(setTranslations({ x, y }));
          dispatch(setZoom(newZoom));
        }
      },
      onClick: ({ event }) => {
        if (event.currentTarget === event.target) {
          dispatch(setActiveItem(null));
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
      <ChildContainer x={translations.x} y={translations.y} zoom={zoom}>
        {children}
      </ChildContainer>
    </Container>
  );
};
