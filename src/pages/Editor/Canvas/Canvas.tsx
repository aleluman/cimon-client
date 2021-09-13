import React from "react";
import { Stage } from "../Stage/Stage";
import { Node } from "../Node/Node";
import { Edge } from "../Edge/Edge";
import { useAppDispatch } from "../../../shared/hooks/redux";
import { addAll } from "../../../shared/state/positions";
import { useGetGraphbyIdQuery } from "@/shared/state/api";
import { Graph } from "@/shared/types/editor";
import { SvgStage } from "./styles";

export const Canvas = () => {
  const { data, error, isLoading } = useGetGraphbyIdQuery("1");
  const dispatchPositions = useAppDispatch();

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  const { nodes, edges } = data as Graph;
  dispatchPositions(addAll(nodes));

  return (
    <Stage>
      {nodes.map((node) => (
        <Node node={node} key={node.id} />
      ))}
      <SvgStage>
        {edges.map((edge) => (
          <Edge edge={edge} key={edge.id} />
        ))}
      </SvgStage>
    </Stage>
  );
};
