import React from "react";
import { ActionsToolbar } from "./ActionsToolbar/ActionsToolbar";
import { Canvas } from "./Canvas/Canvas";
import { RoleBar } from "./RoleBar/RoleBar";
import { Container } from "./Stage/styles";
import { Zoombar } from "./Zoombar/Zoombar";

export const Editor = () => {
  return (
    <Container>
      <Canvas />
      <ActionsToolbar />
      <RoleBar />
      <Zoombar />
    </Container>
  );
};
