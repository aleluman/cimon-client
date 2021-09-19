import { styled } from "./shared/configs/stitches";

export const AppContainer = styled("div", {
  display: "grid",
  height: "100%",
  maxHeight: "100%",
  gridTemplateAreas: '"navbar" "main"',
  gridTemplateRows: "2.4rem 1fr",
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

export const MainContent = styled("main", {
  gridArea: "main",
  height: "100%",
});
