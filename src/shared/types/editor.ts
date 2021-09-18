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

export type RoleType = {
  id: string;
  name: string;
  description: string;
  role: "human" | "service" | "repository";
  numberOfActors: "0..N" | "1..N" | "0..1" | "1" | "?";
  solutionUse: "internal" | "external" | "both";
  abstract: boolean;
  connectedRolesIds: { interactionId: string; roleId: string }[];
  x: number;
  y: number;
};

export type RolePosition = {
  id: string;
  x: number;
  y: number;
};

export type InteractionType = {
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

export type Graph = {
  roles: RoleType[];
  interactions: InteractionType[];
  positions: RolePosition[];
};

export type ActiveItem = {
  id: string;
  type: "role" | "interaction" | "none";
  new?: boolean;
};
