import axios from "axios";
import { useQuery } from "react-query";
import { Graph } from "../types/editor";
import { useStore } from "../state/store";

export const useGetGraph = () => {
  const setPosition = useStore((state) => state.setPosition);

  const id = "1";
  const queryData = useQuery(
    ["graph", id],
    async () => {
      const graph = await axios.get<Graph>(
        `http://localhost:8080/graph/${id}?_embed=interactions&_embed=roles`
      );
      return graph.data;
    },
    {
      onSuccess: (data) => {
        const { roles } = data;
        roles.forEach((role) => setPosition({ id: role.id, x: role.x, y: role.y }));
      },
      refetchOnWindowFocus: false,
    }
  );

  return queryData;
};
