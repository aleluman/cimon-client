import { styled } from "@/shared/constants/stitches";

export const MenuButtonContainer = styled("div", {
  position: "relative",
});

export const PhaseName = styled("span", {
  marginLeft: "1.5rem",
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const PhaseContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "0.15rem",
  userSelect: "none",

  variants: {
    hovering: {
      true: {
        background: "$neutralLightest",
        borderRadius: "4px",
        boxShadow: "0 0 1px 1px $colors$popoverBorder",
      },
    },
  },
});

export const MenuContainer = styled("div", {
  position: "absolute",
  right: 0,
  backdropFilter: "blur(12px)",
  zIndex: 9,
  padding: "0.2rem",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
  background: "$popoverBackground",
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

  "&:hover": {
    background: "$popoverSelect",
  },
});
