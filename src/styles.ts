import { styled } from "./shared/constants/stitches.config";

export const AppContainer = styled("div", {
  display: "grid",
  height: "100%",
  maxHeight: "100%",
  gridTemplateAreas: '"navbar" "main"',
  gridTemplateRows: "2.4rem 1fr",
});

export const MainContent = styled("main", {
  gridArea: "main",
  height: "100%",
});
