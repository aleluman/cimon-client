import { ActionsToolbar } from "./ActionsToolbar/ActionsToolbar";
import { Canvas } from "./Canvas/Canvas";
import { RoleBar } from "./RoleBar/RoleBar";
import { Zoombar } from "./Zoombar/Zoombar";
import { Sidebar } from "./Sidebar/Sidebar";
import { RoleInteractions } from "./RoleInteractions/RoleInteractions";
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Container } from "./styles";

export const Editor = () => {
  return (
    <>
      <Navbar />
      <Container id="editor">
        <Canvas />
        <ActionsToolbar />
        <RoleBar />
        <Zoombar />
        <RoleInteractions />
        <Sidebar />
      </Container>
    </>
  );
};
