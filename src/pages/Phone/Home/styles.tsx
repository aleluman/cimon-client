import { styled } from "@/shared/constants/stitches";

export const HomeContainer = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0.6rem",
});

export const SharedWorkspace = styled("div", {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  background: "$neutralLightest",
  boxShadow: "$subtleShadow",
  borderRadius: "8px",
  height: "100%",
  width: "100%",
  display: "flex",
  fontSize: "1rem",
  color: "$textNormal",
  overflow: "hidden",
});

export const Image = styled("img", {
  width: "100%",
  height: "100%",
});
