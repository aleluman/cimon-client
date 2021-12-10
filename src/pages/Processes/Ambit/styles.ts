import { styled } from "@/shared/constants/stitches";

export const AmbitText = styled("a", {
  flex: 1,
  textDecoration: "none",
  color: "$textNormal",
  fontWeight: 550,
  fontSize: "0.9rem",
  padding: "0.5rem 0.6rem",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  "&:hover": {
    boxShadow: "$subtleShadow",
  },
});

export const AmbitContainer = styled("div", {
  display: "flex",
  width: "100%",
  position: "relative",
  alignItems: "center",
  background: "$neutralFull",
  transition: "box-shadow 0.25s ease",
  border: "1px solid $popoverBorder",
  borderRadius: "6px",
});

export const MenuButtonContainer = styled("div", {
  position: "relative",
});

export const MenuContainer = styled("div", {
  backdropFilter: "blur(12px)",
  width: "7.4rem",
  padding: "0.2rem",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
  background: "$popoverBackground",
  zIndex: 9,
});

export const MenuItem = styled("button", {
  display: "flex",
  width: "100%",
  gap: "0.6rem",
  border: "none",
  background: "transparent",
  padding: "0.6rem",
  borderRadius: "4px",
  color: "$textNormal",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "0.8rem",

  "&:hover": {
    background: "$popoverSelect",
  },
});

export const EditingContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});
