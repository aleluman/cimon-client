import { styled } from "@/shared/constants/stitches";

export const ContentTitleContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ContentTitle = styled("h1", {
  display: "flex",
  gap: "0.4rem",
  flex: 1,
  color: "$textNormal",
  fontSize: "1.5rem",
  margin: 0,
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
});
