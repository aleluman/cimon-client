import { styled } from "@/shared/constants/stitches";

export const MessageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  background: "$neutralFull",
  padding: "0.6rem",
  borderRadius: "10px",
  boxShadow: "$subtlerShadow",
  gap: "0.4rem",

  "&:first-child": {
    borderRadius: "10px 10px 0 10px",
  },
});

export const InnerContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  color: "$textNormal",
  fontSize: "0.85rem",
});

export const TimeContainer = styled("div", {
  color: "$textDull",
  fontSize: "0.75rem",
});
