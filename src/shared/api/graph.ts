import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Graph } from "../types/editor";
import { useEditor } from "../state/store";
import { EditorRouteParams } from "../types/routes";

export const useGetGraph = () => {
  const setPosition = useEditor((state) => state.setPosition);
  const setSelectedAmbit = useEditor((state) => state.setSelectedAmbit);
  const { ambitId } = useParams<EditorRouteParams>();

  const queryData = useQuery(
    ["graph", ambitId],
    async () => {
      const graph = await axios.get<Graph>(
        `http://localhost:8080/graph/${ambitId}?_embed=interactions&_embed=roles`
      );
      const { roles } = graph.data;
      roles.forEach((role) => setPosition({ id: role.id, x: role.x, y: role.y }));
      setSelectedAmbit(graph.data);
      return graph.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return queryData;
};
