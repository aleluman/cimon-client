import { nanoid } from "nanoid";
import { queryClient } from "../state/store";
import { InteractionType, RoleType } from "../types/editor";
import { AmbitType } from "../types/process";

export const createNewInteraction = ({
  source,
  target,
}: {
  source: string;
  target: string;
}): InteractionType => {
  const id = nanoid();
  return { id, source, target, inherit: false, sourceServices: [], targetServices: [] };
};

export const createNewRole = (
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

export const createName = (type: string, ambitId: string) => {
  const capType = type.charAt(0).toUpperCase() + type.slice(1);
  const data = queryClient.getQueryData<AmbitType>(["ambit", ambitId]) as AmbitType;
  const roleNames = data?.graph.roles.map((role) => role.name);

  const getName = (number: number): string => {
    const name = `${capType} ${number}`;
    if (roleNames.includes(name)) return getName(number + 1);
    return name;
  };

  return getName(1);
};
