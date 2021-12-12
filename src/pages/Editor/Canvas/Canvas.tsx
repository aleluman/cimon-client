import { useParams } from "react-router-dom";
import { Stage } from "../Stage/Stage";
import { Interaction } from "../Interaction/Interaction";
import { SvgStage } from "./styles";
import { Role } from "../Role/Role";
import { PlaceHolderInteraction } from "../PlaceholderInteraction/PlaceholderInteraction";
import { useEditor } from "@/shared/state/store";
import { PlaceholderRole } from "../PlaceholderRole/PlaceHolderRode";
import { useGetAmbit } from "@/shared/hooks/ambit";

export const Canvas = () => {
  const { ambitId } = useParams();
  const showPlaceholderInteraction = useEditor((state) => state.placeholderInteraction !== null);
  const showPlaceholderRole = useEditor((state) => state.placeholderRole !== null);
  const { data, error, isLoading } = useGetAmbit(ambitId as string);

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stage>
      {data?.graph.roles && data.graph.roles.map((role) => <Role role={role} key={role.id} />)}
      {showPlaceholderRole && <PlaceholderRole />}
      <SvgStage>
        {data?.graph.interactions &&
          data.graph.interactions.map((interaction) => (
            <Interaction interaction={interaction} key={interaction.id} />
          ))}
        {showPlaceholderInteraction && <PlaceHolderInteraction />}
      </SvgStage>
    </Stage>
  );
};
