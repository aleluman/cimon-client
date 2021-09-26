import { styled } from "@/shared/configs/stitches";

export const NoSelectionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const HelpText = styled("span", {
  margin: 0,
  padding: 0,
  color: "$textDull",
  fontWeight: 550,
});
