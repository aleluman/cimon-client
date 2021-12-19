import { ActionsToolbar } from "./ActionsToolbar/ActionsToolbar";
import { Canvas } from "./Canvas/Canvas";
import { RoleBar } from "./RoleBar/RoleBar";
import { Zoombar } from "./Zoombar/Zoombar";
import { Sidebar } from "./Sidebar/Sidebar";
import { RoleInteractions } from "./RoleInteractions/RoleInteractions";
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Container } from "./styles";
import { useEditor } from "@/shared/state/store";

export const Editor = () => {
  const focusMode = useEditor((state) => state.focusMode);

  return (
    <>
      <Navbar />
      <Container id="editor">
        <Canvas />
        <ActionsToolbar />
        {!focusMode && <RoleBar />}
        <Zoombar />
        <RoleInteractions />
        <Sidebar />
      </Container>
    </>
  );
};
