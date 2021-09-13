import React from "react";
import { Stage } from "../Stage/Stage";
import { Interaction } from "../Interaction/Interaction";
import { useAppDispatch } from "../../../shared/hooks/redux";
import { addAll } from "../../../shared/state/slices/positions";
import { useGetGraphbyIdQuery } from "@/shared/state/slices/api";
import { Graph } from "@/shared/types/editor";
import { SvgStage } from "./styles";
import { Role } from "../Role/Role";

export const Canvas = () => {
  const { data, error, isLoading } = useGetGraphbyIdQuery("1");
  const dispatchPositions = useAppDispatch();

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  const { roles, interactions } = data as Graph;
  dispatchPositions(addAll(roles));

  return (
    <Stage>
      {roles.map((role) => (
        <Role role={role} key={role.id} />
      ))}
      <SvgStage>
        {interactions.map((interaction) => (
          <Interaction interaction={interaction} key={interaction.id} />
        ))}
      </SvgStage>
    </Stage>
  );
};
