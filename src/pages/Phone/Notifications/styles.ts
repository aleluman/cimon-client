import { styled } from "@/shared/constants/stitches";

export const NotificationsTabContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100%",
  padding: "0.6rem",
  gap: "0.6rem",
  position: "relative",
});

export const InnerContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  background: "$neutralLightest",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
  maxWidth: "100%",
});
