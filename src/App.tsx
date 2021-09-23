import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppContainer, MainContent } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";

export const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <MainContent>
          <Switch>
            <Route path="/ambits/:ambitId/editor">
              <Editor />
            </Route>
          </Switch>
        </MainContent>
        <ToastContainer />
      </Router>
    </AppContainer>
  );
};
