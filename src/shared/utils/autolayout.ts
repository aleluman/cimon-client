/* eslint-disable no-plusplus */
import createLayout from "ngraph.forcelayout";
import createGraph from "ngraph.graph";
import { queryClient, useEditor } from "../state/store";
import { AmbitType } from "../types/process";

const physicsSettings = {
  timeStep: 2,
  dimensions: 2,
  gravity: -100,
  theta: 1,
  springLength: 8,
  springCoefficient: 0.8,
  dragCoefficient: 0,
};

export const autoLayout = (ambitId: string): AmbitType["graph"] => {
  const graph = createGraph();
  const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  const { roles, interactions } = ambit.graph;
  const unlinkedRoles = roles.filter((role) => {
    return interactions.every((inter) => inter.source !== role.id && inter.target !== role.id);
  });
  roles.forEach((role) => graph.addNode(role.id));
  interactions.forEach((inter) => graph.addLink(inter.source, inter.target));
  unlinkedRoles.forEach((role) =>
    graph.addLink(role.id, interactions.length === 0 ? roles[0].id : interactions[0].source)
  );
  const layout = createLayout(graph, physicsSettings);
  for (let i = 0; i < 1000; i++) {
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
