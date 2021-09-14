import React from "react";
import { ActionsToolbar } from "./ActionsToolbar/ActionsToolbar";
import { Canvas } from "./Canvas/Canvas";
import { Container } from "./Stage/styles";

export const Editor = () => {
  return (
    <Container>
      <Canvas />
      <ActionsToolbar />
    </Container>
  );
};
