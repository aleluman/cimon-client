import { styled } from "@/shared/constants/stitches.config";

export const UserNameContainer = styled("button", {
  display: "flex",
  gap: "0.2rem",
  padding: "0.4rem",
  background: "transparent",
  border: "none",
  color: "$textNormal",
  cursor: "pointer",

  "& p": {
    maxWidth: "12rem",
    margin: 0,
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

export const MenuContainer = styled("div", {
  backdropFilter: "blur(12px)",
  zIndex: 9,
  padding: "0.2rem",
  borderRadius: "4px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
  background: "$popoverBackground",
});

export const UserMenuItem = styled("button", {
  display: "flex",
  width: "100%",
  gap: "0.6rem",
  border: "none",
  background: "transparent",
  padding: "0.6rem",
  borderRadius: "4px",
  color: "$textNormal",
  cursor: "pointer",

  "&:hover": {
    background: "$popoverSelect",
  },
});
