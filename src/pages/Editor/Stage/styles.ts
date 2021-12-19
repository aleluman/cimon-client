import { styled } from "@/shared/constants/stitches";

export const Container = styled("div", {
  width: "100vw",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  touchAction: "none",
});

export const Background = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  touchAction: "none",
  background: "$neutralDarker",
  userSelect: "none",
});

export const ChildContainer = styled("div", {
  position: "relative",
  width: 0,
  height: 0,
  transformOrigin: "0% 0%",
  touchAction: "none",

  "& > *": {
    position: "absolute",
  },
});
