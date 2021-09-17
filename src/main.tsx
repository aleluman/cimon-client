import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./shared/state/store";
import { darkTheme } from "./shared/themes/dark";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
