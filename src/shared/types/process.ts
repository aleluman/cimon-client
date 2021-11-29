import { iconPaths } from "../constants/Icons";
import { RoleType } from "./editor";

export type ProcessCategory = {
  id: string;
  value: string;
  name: string;
  icon?: keyof typeof iconPaths;
};

export type ProcessRoleType = {
  id: string;
  name: string;
  type: RoleType["role"];
};

export type NewPhaseType = {
  name: string;
  process: string;
};

export type PhaseType = {
  name: string;
  id: string;
};

export type NewProcessType = {
  name: string;
  description: string;
  objective: string;
  category: "generic" | "health" | "travel" | "shopping";
};

export type ProcessType = {
  id: string;
  name: string;
  description: string;
  objective: string;
  roles: ProcessRoleType[];
  category: "generic" | "health" | "travel" | "shopping";
  ambits: { id: string; name: string; phases: string[] }[];
  phases: { id: string; name: string }[];
  lastEdited: string;
};
