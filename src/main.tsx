import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { App } from "./App";
import { darkTheme } from "./shared/themes/dark";
import { queryClient } from "./shared/state/store";

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <App /> <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
