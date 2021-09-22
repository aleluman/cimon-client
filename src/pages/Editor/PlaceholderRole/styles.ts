import { styled } from "@/shared/configs/stitches";

export const PlaceholderContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "8rem",
  height: "5rem",
  boxShadow: "$borderedPrimary",
  borderRadius: "4px",
  background: "transparent",
  backdropFilter: "blur(10px)",
  zIndex: 9999,
});
