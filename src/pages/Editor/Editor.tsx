import { ActionsToolbar } from "./ActionsToolbar/ActionsToolbar";
import { Canvas } from "./Canvas/Canvas";
import { RoleBar } from "./RoleBar/RoleBar";
import { Container } from "./Stage/styles";
import { Zoombar } from "./Zoombar/Zoombar";
import { Sidebar } from "./Sidebar/Sidebar";
import { RoleInteractions } from "./RoleInteractions/RoleInteractions";

export const Editor = () => {
  return (
    <Container id="editor">
      <Canvas />
      <ActionsToolbar />
      <RoleBar />
      <Zoombar />
      <RoleInteractions />
      <Sidebar />
    </Container>
  );
};
