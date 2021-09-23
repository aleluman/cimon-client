import { useGesture } from "@use-gesture/react";
import { getPath } from "../../../shared/utils/curves";
import { ClickPath, Path, PathContainer } from "./styles";
import { roleDimentions } from "@/shared/configs/editorConfigs";
import { InteractionType } from "@/shared/types/editor";
import { useEditor } from "@/shared/state/store";
import { useInteraction } from "@/shared/api/interaction";

type InteractionProps = {
  interaction: InteractionType;
};

export const Interaction = ({ interaction }: InteractionProps) => {
  const startPosition = useEditor((state) => state.rolePositions[interaction.source]);
  const endPosition = useEditor((state) => state.rolePositions[interaction.target]);
  const activeItem = useEditor((state) => state.activeItem);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const { deleteInteraction } = useInteraction();

  const pathHandlers = useGesture({
    onClick: () => {
      setActiveItem({ id: interaction.id, type: "interaction" });
    },
    onKeyDown: ({ event }) => {
      const { key } = event;
      if (key === "Delete") {
        deleteInteraction.mutate(interaction.id);
      }
    },
  });

  const curve = getPath(roleDimentions.width, roleDimentions.height, startPosition, endPosition);

  return (
    <PathContainer tabIndex={0} {...pathHandlers()}>
      <Path d={curve} active={activeItem.id === interaction.id} />
      <ClickPath d={curve} />
    </PathContainer>
  );
};
