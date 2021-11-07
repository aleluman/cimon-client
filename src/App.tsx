import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Slide } from "react-toastify";
import { AppContainer, MainContent, Toast } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";
import { Processes } from "./pages/Processes/Processes";
import { usePreferences } from "./shared/state/store";
import { theme } from "./shared/constants/stitches";
import { lightTheme } from "./shared/constants/lightTheme";
import { Login } from "./pages/Login/Login";

export const App = () => {
  const themeObject = usePreferences((state) => {
    if (state.theme === "dark") return theme;
    return lightTheme;
  });

  return (
    <AppContainer className={themeObject}>
      <BrowserRouter>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="processes/*" element={<Processes />} />
            <Route path="processes/:processId/:ambitId" element={<Editor />} />
          </Routes>
        </MainContent>
        <Toast position="top-center" transition={Slide} autoClose={3000} />
      </BrowserRouter>
      <div id="tooltips" />
    </AppContainer>
  );
};
