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
  role: RoleType["role"];
};

export type ProcessType = {
  id: string;
  name: string;
  description: string;
  roles: ProcessRoleType[];
  category: "generic" | "health" | "travel" | "shopping";
  ambits: { id: string; name: string }[];
  phases: { name: string }[];
};
