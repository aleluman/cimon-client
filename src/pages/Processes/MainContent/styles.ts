import { styled } from "@/shared/constants/stitches";

export const Container = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem",
  gap: "1rem",
  overflowY: "auto",
  paddingBottom: "4rem",
});

export const ErrorText = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  color: "$textNormal",
});
