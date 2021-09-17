import { AppContainer, MainContent } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";

export const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Editor />
      </MainContent>
    </AppContainer>
  );
};
