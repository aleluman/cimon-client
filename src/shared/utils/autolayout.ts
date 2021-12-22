/* eslint-disable no-plusplus */
import createLayout from "ngraph.forcelayout";
import createGraph from "ngraph.graph";
import { queryClient, useEditor } from "../state/store";
import { AmbitType } from "../types/process";

const physicsSettings = {
  timeStep: 0.5,
  dimensions: 2,
  gravity: -12,
  theta: 0.8,
  springLength: 15,
  springCoefficient: 0.8,
  dragCoefficient: 0.9,
};

export const autoLayout = (ambitId: string): AmbitType["graph"] => {
  const graph = createGraph();
  const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  const { roles, interactions } = ambit.graph;
  roles.forEach((role) => graph.addNode(role.id));
  interactions.forEach((inter) => graph.addLink(inter.source, inter.target));
  const layout = createLayout(graph, physicsSettings);
  for (let i = 0; i < 100; i++) {
    layout.step();
  }

  const newRoles = roles.map((role) => {
    const position = layout.getNodePosition(role.id);
    return { ...role, x: position.x * 20, y: position.y * 20 };
  });
  const { setDoingAction } = useEditor.getState();
  setDoingAction(true);
  return { roles: newRoles, interactions };
};
