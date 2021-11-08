import { ToastContainer } from "react-toastify";
import { styled } from "./shared/constants/stitches";

export const AppContainer = styled("div", {
  height: "100%",
  maxHeight: "100%",
  width: "100%",
  scrollbarColor: "$neutralDarker $neutralFull",

  "::-webkit-scrollbar": {
    width: "12px",
  },

  "::-webkit-scrollbar-track": {
    backgroundColor: "$neutralDarker",
    borderRadius: "50px",
    boxShadow: "inset 0 0 4px #0b0b0c66",
  },

  "::-webkit-scrollbar-thumb": {
    background: "$neutralFull",
    border: "1px solid $popoverBorder",
    borderRadius: "50px",
  },
});

export const Toast = styled(ToastContainer, {
  ".Toastify__toast-container": {
    fontWeight: 400,
  },

  ".Toastify__toast": {
    background: "$toastBackground",
    backdropFilter: "blur(12px)",
    color: "$textImportant",
    fontSize: "0.9rem",
    border: "1px solid $popoverBorder",
    fontWeight: 400,
  },

  ".Toastify__close-button > svg": {
    fill: "$iconGray",
    opacity: 1,
  },
});
