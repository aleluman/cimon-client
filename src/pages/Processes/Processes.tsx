import { Route, Routes } from "react-router-dom";
import { NoSelection } from "./NoSelection/NoSelection";
import { MainContent } from "./MainContent/MainContent";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "./styles";

export const Processes = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        <Route path="" element={<NoSelection />} />
        <Route path=":processId" element={<MainContent />} />
      </Routes>
    </Container>
  );
};
