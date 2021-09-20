import { nanoid } from "nanoid";
import { InteractionType } from "../types/editor";

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
