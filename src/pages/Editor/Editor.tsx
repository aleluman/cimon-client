import { useParams } from "react-router-dom";
import { ActionsToolbar } from "./ActionsToolbar/ActionsToolbar";
import { Canvas } from "./Canvas/Canvas";
import { RoleBar } from "./RoleBar/RoleBar";
import { Zoombar } from "./Zoombar/Zoombar";
import { Sidebar } from "./Sidebar/Sidebar";
import { RoleInteractions } from "./RoleInteractions/RoleInteractions";
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Container } from "./styles";
import { useEditor } from "@/shared/state/store";
import { useGetAmbit } from "@/shared/hooks/ambit";
import { Spinner } from "@/shared/components/Spinner/Spinner";

export const Editor = () => {
  const { ambitId } = useParams();
  const focusMode = useEditor((state) => state.focusMode);
  const { isLoading, isError } = useGetAmbit(ambitId as string);

  return (
    <>
      <Navbar />
      <Container id="editor">
        {isLoading && <Spinner size={46} thickness={5} />}
        {!isLoading && !isError && (
          <>
            <Canvas />
            <ActionsToolbar />
            {!focusMode && <RoleBar />}
            <Zoombar />
            <RoleInteractions />
            <Sidebar />
          </>
        )}
      </Container>
    </>
  );
};
