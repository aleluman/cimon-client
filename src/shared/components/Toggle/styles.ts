import { styled } from "@/shared/constants/stitches";

export const ToggleContainer = styled("div", {
  display: "flex",
  border: "1px solid $borderDark",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "0.8rem",
});

export const Label = styled("label", {
  color: "$textNormal",
  display: "inline-block",
  fontSize: "0.85rem",
  paddingBottom: "0.4rem",
});
