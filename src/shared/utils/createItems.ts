import { nanoid } from "nanoid";
import { InteractionType, RoleType } from "../types/editor";

export const createInteraction = ({
  source,
  target,
}: {
  source: string;
  target: string;
}): InteractionType => {
  const id = nanoid();
  return { id, source, target, inherit: false, sourceServices: [], targetServices: [] };
};

export const createRole = (
  name: string,
  role: RoleType["role"],
  x: number,
  y: number
): RoleType => {
  const id = nanoid();
  return {
    id,
    name,
    role,
    x,
    y,
    numberOfActors: "?",
    solutionUse: "internal",
    abstract: false,
    description: "",
    connectedRolesIds: [],
  };
};
