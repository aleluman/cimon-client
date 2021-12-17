import { styled } from "@/shared/constants/stitches";

export const RoleMenuContainer = styled("div", {
  display: "flex",
  gap: "0.2rem",
  padding: "0.3rem",
  backdropFilter: "blur(12px)",
  background: "$popoverBackground",
  border: "2px solid $primaryAccent",
  borderRadius: "8px",
  maxHeight: "3rem",
  boxShadow: "$hoverShadowLarge",

  "@supports not (backdrop-filter: blur(12px))": {
    background: "$popoverNSBackground",
  },
});

export const IconSelect = styled("button", {
  display: "flex",
  background: "transparent",
  alignItems: "center",
  justifyContent: "center",
  width: "1.9rem",
  height: "100%",
  color: "$textNormal",
  fontSize: "0.75rem",
  cursor: "pointer",
  border: "1px solid $popoverBorder",
  borderRadius: "4px",
  padding: "0 0.2rem",
  transition: "box-shadow 0.25s ease",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },
});

export const Divider = styled("span", {
  height: "1.8rem",
  width: 0,
  borderLeft: "1px solid $popoverBorder",
  margin: "0 0.1rem",
});

export const SelectMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$neutralFull",
  position: "absolute",
  padding: "0.4rem",
  border: "1px solid $popoverBorder",
  borderRadius: "4px",
  boxShadow: "$hoverShadowLarge",
});

export const SelectMenuText = styled("p", {
  margin: "0 0 0.2rem 0.2rem",
  color: "$textNormal",
  fontSize: "0.75rem",
});

export const IconContainer = styled("div", {
  display: "flex",
  gap: "0.2rem",
});

export const MenuDivider = styled("span", {
  width: "100%",
  height: 0,
  borderBottom: "1px solid $popoverBorder",
  margin: "0.3rem 0",
});

export const ActorsButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  width: "1.9rem",
  height: "1.9rem",
  border: "none",
  borderRadius: "4px",
  color: "$textNormal",
  fontSize: "0.75rem",
  fontWeight: 500,
  cursor: "pointer",

  "&:hover": {
    background: "$neutralDarker",
  },

  variants: {
    working: {
      true: {
        boxShadow: "inset 0 0 8px $colors$primaryLight, $borderedPrimarySmall",
        background: "$neutralLight",
      },
    },
  },
});
