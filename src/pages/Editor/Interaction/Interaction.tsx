import { useGesture } from "@use-gesture/react";
import { getPath } from "../../../shared/utils/curves";
import { ClickPath, Path } from "./styles";
import { roleDimentions } from "@/shared/configs/editorConfigs";
import { InteractionType } from "@/shared/types/editor";
import { useStore } from "@/shared/state/store";

type InteractionProps = {
  interaction: InteractionType;
};

export const Interaction = ({ interaction }: InteractionProps) => {
  const startPosition = useStore((state) => state.rolePositions[interaction.source]);
  const endPosition = useStore((state) => state.rolePositions[interaction.target]);
  const activeItem = useStore((state) => state.activeItem);
  const setActiveItem = useStore((state) => state.setActiveItem);

  const pathHandlers = useGesture({
    onClick: () => {
      setActiveItem({ id: interaction.id, type: "interaction" });
    },
  });

  const curve = getPath(roleDimentions.width, roleDimentions.height, startPosition, endPosition);

  return (
    <g {...pathHandlers()}>
      <Path d={curve} active={activeItem.id === interaction.id} />
      <ClickPath d={curve} />
    </g>
  );
};
