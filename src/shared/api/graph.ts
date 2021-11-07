import axios from "axios";
import { useQuery } from "react-query";
import { Graph } from "../types/editor";
import { useEditor } from "../state/store";

export const useGetGraph = (ambitId: string) => {
  const addAmbit = useEditor((state) => state.addAmbit);
  const setPosition = useEditor((state) => state.setPosition);
  const setSelectedAmbit = useEditor((state) => state.setSelectedAmbit);

  const queryData = useQuery(
    ["graph", ambitId],
    async () => {
      const graph = await axios.get<Graph>(
        `http://localhost:8080/graph/${ambitId}?_embed=interactions&_embed=roles`
      );
      return graph.data;
    },
    {
      onSuccess: (graph) => {
        const { roles } = graph;
        addAmbit(ambitId);
        roles.forEach((role) => setPosition({ id: role.id, x: role.x, y: role.y }, ambitId));
        setSelectedAmbit(graph);
      },
      refetchOnWindowFocus: false,
    }
  );

  return queryData;
};
