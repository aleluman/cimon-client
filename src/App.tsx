import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppContainer, MainContent } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";
import { Mockup } from "./pages/Mockup/Mockup";
import { Processes } from "./pages/Processes/Processes";

export const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <MainContent>
          <Switch>
            <Route path="/processes" component={Processes} />
            <Route path="/ambits/:ambitId/editor" component={Editor} />
            <Route path="/ambits/:ambitId/mockup" component={Mockup} />
          </Switch>
        </MainContent>
        <ToastContainer />
      </Router>
    </AppContainer>
  );
};
