import React, { ReactNode, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { Container, Background, ChildContainer } from "./styles";
import { setActiveItem, setTranslations, setZoom } from "@/shared/state/slices/editor";
import { calcZoom, getMousePosition } from "@/shared/utils/zoom";
import { zoomLimits } from "@/shared/constants/editorConfigs";
import { translationsSelector, zoomSelector } from "@/shared/state/selectors";

type StageProps = {
  children: ReactNode;
};

export const Stage = ({ children }: StageProps) => {
  const { x, y } = useAppSelector(translationsSelector);
  const zoom = useAppSelector(zoomSelector);
  const dispatch = useAppDispatch();
  const backgroundRef = useRef<HTMLDivElement>(null);

  const stageHandlers = useGesture(
    {
      onDrag: ({ event, delta: [dx, dy] }) => {
        if (event.currentTarget === event.target) {
          dispatch(setTranslations({ x: x + dx, y: y + dy }));
        }
      },
      onWheel: ({ event, active }) => {
        const { deltaY, deltaMode } = event;
        const mouseCoords = getMousePosition(event, backgroundRef.current);
        const { newZoom, newX, newY } = calcZoom(mouseCoords, { x, y }, zoom, deltaY, deltaMode);
        if (active && newZoom >= zoomLimits.min && newZoom <= zoomLimits.max) {
          dispatch(setTranslations({ x: newX, y: newY }));
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
      <ChildContainer x={x} y={y} zoom={zoom}>
        {children}
      </ChildContainer>
    </Container>
  );
};
