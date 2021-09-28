import { RoleType } from "./editor";

export type ProcessCategory = "generic" | "health" | "shopping" | "travel";

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
  category: ProcessCategory;
  ambits: { id: string; name: string }[];
  phases: { name: string }[];
};
