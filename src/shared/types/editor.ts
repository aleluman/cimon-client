export type Services = {
  audioconference: boolean;
  videoconference: boolean;
  whiteboard: boolean;
  textMessage: boolean;
  audio: boolean;
  video: boolean;
  image: boolean;
  structuredData: boolean;
  file: boolean;
  sendToOne: boolean;
  sendToMany: boolean;
  sendToAll: boolean;
  replyToSender: boolean;
  replyToAll: boolean;
  priority: boolean;
  incomingMessages: boolean;
  outgoingMessageStatus: boolean;
  othersPresence: boolean;
  othersAvailability: boolean;
  othersLocation: boolean;
  communicationLog: boolean;
};

export type Role = {
  id: string;
  name: string;
  description: string;
  role: "human" | "service" | "repository";
  numberOfActors: "0..N" | "1..N" | "0..1" | "1" | "?";
  solutionUse: "internal" | "external" | "both";
  abstract: boolean;
  connectedNodesIds: { edgeId: string; nodeId: string }[];
  x: number;
  y: number;
};

export type NodePosition = {
  id: string;
  x: number;
  y: number;
};

export type Interaction = {
  id: string;
  source: string;
  target: string;
  sourceServices: Services;
  targetServices: Services;
  inherit: boolean;
};

export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

type ActiveRole = {
  type: "Role";
  id: string;
  new?: boolean;
};

type ActveInteraction = {
  type: "Interaction";
  id: string;
  new?: boolean;
};

export type ActiveItemType =
  | { type: "None"; new?: boolean }
  | ActiveRole
  | ActveInteraction;

export type Cursor = "default" | "grabbing" | "move" | "pointer" | "grab";

export type Graph = {
  nodes: Role[];
  edges: Interaction[];
  positions: NodePosition[];
};

export type PlaceholderEdge = {
  startNodeId: string;
  start: Position;
  end: Position;
  color?: string;
};

export type PlaceholderNode = {
  type: "human" | "service" | "repository";
  position: Position;
};
