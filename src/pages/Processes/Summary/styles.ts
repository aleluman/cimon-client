import { styled } from "@/shared/constants/stitches";

export const SummaryContainer = styled("div", {
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  position: "absolute",
  width: "24rem",
  maxHeight: "27rem",
  background: "$popoverBackground",
  backdropFilter: "blur(12px)",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
  padding: "0.6rem",
  color: "$textNormal",

  "@supports not (backdrop-filter: blur(12px))": {
    background: "$popoverNSBackground",
  },
});

export const RolesDiv = styled("div", {
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
});

export const Description = styled("div", {
  fontSize: "0.85rem",
  marginBottom: "1rem",
  flex: 1,
});

export const TagContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const RolesContainer = styled("div", {
  color: "$textNormal",
  fontSize: "0.85rem",
  lineHeight: "140%",
});

export const LastEditedText = styled("span", {
  fontSize: "0.8rem",
  fontStyle: "oblique",
  color: "$textDull",
  alignSelf: "flex-end",
});
