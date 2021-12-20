import { object, number, string, array, boolean } from "superstruct";

export const graphSchema = object({
  roles: array(
    object({
      x: number(),
      y: number(),
      id: string(),
      name: string(),
      role: string(),
      abstract: boolean(),
      description: string(),
      solution: string(),
      numberOfActors: string(),
    })
  ),
  interactions: array(
    object({
      id: string(),
      source: string(),
      target: string(),
      inherit: boolean(),
      sourceServices: array(string()),
      targetServices: array(string()),
    })
  ),
});
