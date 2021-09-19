import { styled } from "@/shared/configs/stitches";

export const ZoomBarContainer = styled("div", {
  display: "flex",
  gap: "0.2rem",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "0.4rem",
  backdropFilter: "blur(10px)",
  left: "50%",
  transform: "translateX(calc(-50% - 10rem))",
  background: "$popoverBackground",
  padding: "0.3rem",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$subtleShadow",
  transition: "transform ease 0.5s",
  userSelect: "none",
});

export const Divider = styled("span", {
  height: "1.8rem",
  width: 0,
  borderLeft: "1px solid $popoverBorder",
  margin: "0 0.3rem",
});
