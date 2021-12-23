import { iconPaths } from "../constants/Icons";
import { InteractionType, RoleType } from "./editor";

export type ProcessCategory = {
  id: string;
  value: string;
  name: string;
  icon?: keyof typeof iconPaths;
};

export type ProcessRoleType = {
  name: string;
  role: RoleType["role"];
};

export type NewPhaseType = {
  name: string;
  process: string;
};

export type PhaseType = {
  name: string;
  id: string;
};

export type NewAmbitType = {
  process: string;
  name: string;
};

export type AmbitType = {
  id: string;
  name: string;
  description: string;
  graph: {
    roles: RoleType[];
    interactions: InteractionType[];
  };
  phases: string[];
  last_edited: Date;
};

export type NewProcessType = {
  name: string;
  description: string;
  objective: string;
  category:
    | "generic"
    | "delivery"
    | "restaurant"
    | "ridesharing"
    | "lodging"
    | "todo/kanban"
    | "package management";
};

export type ProcessType = {
  id: string;
  name: string;
  description: string;
  objective: string;
  roles: ProcessRoleType[];
  category:
    | "generic"
    | "delivery"
    | "restaurant"
    | "ridesharing"
    | "lodging"
    | "todo/kanban"
    | "package management";
  ambits: { id: string; name: string; phases: string[] }[];
  phases: { id: string; name: string }[];
  lastEdited: string;
  ambitOrders: string[];
};
