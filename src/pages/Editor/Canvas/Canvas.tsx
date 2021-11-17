import { Stage } from "../Stage/Stage";
import { Interaction } from "../Interaction/Interaction";
import { SvgStage } from "./styles";
import { Role } from "../Role/Role";
import { useGetGraph } from "@/shared/hooks/graph";
import { PlaceHolderInteraction } from "../PlaceholderInteraction/PlaceholderInteraction";
import { useEditor } from "@/shared/state/store";
import { PlaceholderRole } from "../PlaceholderRole/PlaceHolderRode";

export const Canvas = () => {
  const showPlaceholderInteraction = useEditor((state) => state.placeholderInteraction !== null);
  const showPlaceholderRole = useEditor((state) => state.placeholderRole !== null);
  const { data, error, isLoading } = useGetGraph();

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stage>
      {data?.roles && data.roles.map((role) => <Role role={role} key={role.id} />)}
      {showPlaceholderRole && <PlaceholderRole />}
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
