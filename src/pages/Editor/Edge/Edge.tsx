import React from "react";
import { useGesture } from "@use-gesture/react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { getPath } from "../../../shared/utils/curves";
import { Interaction } from "@/shared/types/editor";
import { Path } from "./styles";
import { setActiveItem } from "@/shared/state/editor";

type EdgeProps = {
  edge: Interaction;
};

export const Edge = ({ edge }: EdgeProps) => {
  const startPosition = useAppSelector((state) => state.positions[edge.source]);
  const endPosition = useAppSelector((state) => state.positions[edge.target]);
  const activeItemId = useAppSelector((state) => state.editor.activeItem);
  const dispatch = useAppDispatch();

  const pathHandlers = useGesture({
    onClick: () => {
      dispatch(setActiveItem(edge.id));
    },
  });

  const curve = getPath(16 * 8, 16 * 5, startPosition, endPosition);

  return (
    <g {...pathHandlers()}>
      <Path d={curve} active={activeItemId === edge.id} />
    </g>
  );
};
