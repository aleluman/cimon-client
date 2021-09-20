import { ToastContainer } from "react-toastify";
import { AppContainer, MainContent } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Editor />
      </MainContent>
      <ToastContainer />
    </AppContainer>
  );
};
