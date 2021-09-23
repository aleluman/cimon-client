import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { App } from "./App";
import { queryClient } from "./shared/state/store";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App /> <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
