import { styled } from "@/shared/constants/stitches";

export const CallContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  background: "$neutralDark",
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "2px solid $borderPhone",
  overflow: "hidden",
  zIndex: 2,
});
