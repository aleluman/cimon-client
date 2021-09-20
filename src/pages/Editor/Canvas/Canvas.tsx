import { Stage } from "../Stage/Stage";
import { Interaction } from "../Interaction/Interaction";
import { SvgStage } from "./styles";
import { Role } from "../Role/Role";
import { useGetGraph } from "@/shared/api/graph";
import { PlaceHolderInteraction } from "../PlaceholderInteraction/PlaceholderInteraction";
import { useStore } from "@/shared/state/store";

export const Canvas = () => {
  const showPlaceholderInteraction = useStore((state) => state.showPlaceholderInteraction);
  const { data, error, isLoading } = useGetGraph();

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stage>
      {data?.roles && data.roles.map((role) => <Role role={role} key={role.id} />)}
      <SvgStage>
        {data?.interactions &&
          data.interactions.map((interaction) => (
            <Interaction interaction={interaction} key={interaction.id} />
          ))}
        {showPlaceholderInteraction && <PlaceHolderInteraction />}
      </SvgStage>
    </Stage>
  );
};
