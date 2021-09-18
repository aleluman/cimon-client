import { useGesture } from "@use-gesture/react";
import { getPath } from "../../../shared/utils/curves";
import { Path } from "./styles";
import { roleDimentions } from "@/shared/constants/editorConfigs";
import { InteractionType } from "@/shared/types/editor";
import { useStore } from "@/shared/state/store";

type InteractionProps = {
  interaction: InteractionType;
};

export const Interaction = ({ interaction }: InteractionProps) => {
  const startPosition = useStore((state) => state.rolePositions[interaction.source]);
  const endPosition = useStore((state) => state.rolePositions[interaction.target]);
  const activeItemId = useStore((state) => state.activeItemId);
  const setActiveItemId = useStore((state) => state.setActiveItemId);

  const pathHandlers = useGesture({
    onClick: () => {
      setActiveItemId(interaction.id);
    },
  });

  const curve = getPath(roleDimentions.width, roleDimentions.height, startPosition, endPosition);

  return (
    <g {...pathHandlers()}>
      <Path d={curve} active={activeItemId === interaction.id} />
    </g>
  );
};
