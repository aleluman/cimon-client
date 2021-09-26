import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Slide } from "react-toastify";
import { AppContainer, MainContent, Toast } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";
import { Mockup } from "./pages/Mockup/Mockup";
import { Processes } from "./pages/Processes/Processes";
import { usePreferences } from "./shared/state/store";
import { theme } from "./shared/configs/stitches";
import { lightTheme } from "./shared/configs/lightTheme";

export const App = () => {
  const themeObject = usePreferences((state) => {
    if (state.theme === "dark") return theme;
    return lightTheme;
  });

  return (
    <AppContainer className={themeObject}>
      <Router>
        <Navbar />
        <MainContent>
          <Switch>
            <Route path="/processes" component={Processes} />
            <Route path="/ambits/:ambitId/editor" component={Editor} />
            <Route path="/ambits/:ambitId/mockup" component={Mockup} />
            <Route exact path="/">
              <Redirect to="/processes" />
            </Route>
          </Switch>
        </MainContent>
        <Toast position="top-center" transition={Slide} autoClose={3000} />
      </Router>
      <div id="tooltips" />
    </AppContainer>
  );
};
