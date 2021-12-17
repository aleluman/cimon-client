import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Slide } from "react-toastify";
import { AppContainer, Toast } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Processes } from "./pages/Processes/Processes";
import { useEditor, usePreferences } from "./shared/state/store";
import { theme } from "./shared/constants/stitches";
import { lightTheme } from "./shared/constants/lightTheme";
import { Login } from "./pages/Login/Login";
import { PrivateRoute } from "./shared/components/PrivateRoute/PrivateRoute";
import { Modal } from "./shared/components/Modal/Modal";
import { ModalFooterContainer } from "./shared/components/Modal/styles";
import { Button } from "./shared/components/Button/Button";

export const App = () => {
  const networkError = useEditor((state) => state.netWorkError);
  const themeObject = usePreferences((state) => {
    if (state.theme === "dark") return theme;
    return lightTheme;
  });

  return (
    <AppContainer className={themeObject}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="processes/*"
            element={
              <PrivateRoute>
                <Processes />
              </PrivateRoute>
            }
          />
          <Route
            path="processes/:processId/:ambitId"
            element={
              <PrivateRoute>
                <Editor />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/processes" />} />
        </Routes>
        <Toast position="top-center" transition={Slide} autoClose={3000} />
      </BrowserRouter>
      <div id="tooltips" />
      {networkError && (
        <Modal isOpen setIsOpen={() => {}}>
          There was an error connecting to the server. Please refresh this page.
          <ModalFooterContainer>
            <Button onClick={() => window.location.reload()}>Refresh</Button>
          </ModalFooterContainer>
        </Modal>
      )}
    </AppContainer>
  );
};
