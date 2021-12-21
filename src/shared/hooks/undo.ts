import { useParams } from "react-router-dom";
import { queryClient, useEditor } from "../state/store";
import { AmbitType } from "../types/process";
import { useAmbit } from "./ambit";

const createVersion = (ambitId: string) => {
  const { versions, currentVersion: index, setVersions, setCurrentVersion } = useEditor.getState();
  const canRedo = index !== versions.length - 1;
  const nextVersions = canRedo ? versions.slice(0, index + 1) : versions;
  const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
  const { roles, interactions } = ambit.graph;
  const newVersion = {
    roles,
    interactions,
  };
  setCurrentVersion(nextVersions.length);
  setVersions([...nextVersions, newVersion]);
};

export const useUndo = () => {
  const currentVersion = useEditor((state) => state.currentVersion);
  const graphVersions = useEditor((state) => state.versions);
  const setActiveItem = useEditor((state) => state.setActiveItem);
  const canUndo = currentVersion !== 0;
  const canRedo = currentVersion !== graphVersions.length - 1;

  const { setGraph } = useAmbit();

  const { ambitId, processId } = useParams();

  const undo = () => {
    setActiveItem({ id: "", type: "none" });
    const {
      versions,
      currentVersion: index,
      setCurrentVersion,
      setDoingAction,
    } = useEditor.getState();
    setDoingAction(true);
    const newVersion = versions[index - 1];
    setGraph.mutate({
      id: ambitId as string,
      graph: newVersion,
      process: processId as string,
    });
    setCurrentVersion(Math.max(index - 1, 0));
  };

  const redo = () => {
    setActiveItem({ id: "", type: "none" });
    const {
      versions,
      currentVersion: index,
      setCurrentVersion,
      setDoingAction,
    } = useEditor.getState();
    setDoingAction(true);
    const newVersion = versions[index + 1];
    setGraph.mutate({
      id: ambitId as string,
      graph: newVersion,
      process: processId as string,
    });
    setCurrentVersion(Math.min(index + 1, versions.length - 1));
  };

  return { createVersion, undo, redo, canUndo, canRedo, mutation: setGraph };
};
