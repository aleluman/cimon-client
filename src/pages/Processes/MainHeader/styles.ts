import { styled } from "@/shared/constants/stitches";

export const ContentTitleContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "80rem",
  minWidth: "50rem",
});

export const ContentTitle = styled("h1", {
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  flex: 1,
  color: "$textNormal",
  fontSize: "1.5rem",
  margin: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const ProcessName = styled("div", {
  borderRight: "1px solid $popoverBorder",
  paddingRight: "0.4rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const LastEditedText = styled("span", {
  fontSize: "0.8rem",
  fontStyle: "oblique",
  color: "$textDull",
  borderRight: "1px solid $borderLight",
  paddingRight: "1rem",
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
});
