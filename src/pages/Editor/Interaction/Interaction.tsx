import React from "react";
import { useGesture } from "@use-gesture/react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { getPath } from "../../../shared/utils/curves";
import { InteractionType } from "@/shared/types/editor";
import { Path } from "./styles";
import { setActiveItem } from "@/shared/state/slices/editor";
import { activeItemSelector, positionSelector } from "@/shared/state/selectors";
import { roleDimentions } from "@/shared/constants/editorConfigs";

type InteractionProps = {
  interaction: InteractionType;
};

export const Interaction = ({ interaction }: InteractionProps) => {
  const startPosition = useAppSelector(positionSelector(interaction.source));
  const endPosition = useAppSelector(positionSelector(interaction.target));
  const activeItemId = useAppSelector(activeItemSelector);
  const dispatch = useAppDispatch();

  const pathHandlers = useGesture({
    onClick: () => {
      dispatch(setActiveItem(interaction.id));
    },
  });

  const curve = getPath(roleDimentions.width, roleDimentions.height, startPosition, endPosition);

  return (
    <g {...pathHandlers()}>
      <Path d={curve} active={activeItemId === interaction.id} />
    </g>
  );
};
