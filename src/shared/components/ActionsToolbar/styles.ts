import { styled } from "@/shared/configs/stitches";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "0.4rem",
  left: "0.4rem",
  background: "$popoverBackground",
  border: "1px solid $popoverBorder",
  backdropFilter: "blur(10px)",
  padding: "0.3rem",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",

  variants: {
    inMockup: {
      true: {
        background: "$neutralFull",
        boxShadow: "none",
        border: "1px solid $borderDark",
        backdropFilter: "none",
      },
    },
  },
});

export const ModesContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  width: "7rem",
  gap: "0.2rem",
  marginRight: "0.2rem",
});

export const Mode = styled("button", {
  display: "flex",
  alignItems: "center",
  background: "$primary",
  border: "none",
  color: "white",
  padding: "0.4rem",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all ease 0.3s",

  "&:hover": {
    background: "primaryAccent",
    boxShadow: "$hoverShadowSmall",
  },

  variants: {
    inactive: {
      true: {
        background: "transparent",
        color: "$textNormal",

        "&:hover": {
          color: "$textImportant",
          boxShadow: "$hoverShadowSmall",
        },
      },
    },
  },
});

export const Divider = styled("span", {
  height: "1.8rem",
  width: 0,
  borderLeft: "1px solid $popoverBorder",
  margin: "0 0.3rem",
});

export const ExportButton = styled("button", {
  position: "relative",
  display: "flex",
  gap: "0.3rem",
  background: "transparent",
  border: "1px solid $popoverBorder",
  padding: "0.3rem",
  color: "$textNormal",
  borderRadius: "4px",
  marginRight: "0.2rem",
  cursor: "pointer",
  transition: "all ease 0.3s",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },
});

export const ExportMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  padding: "0.2rem",
  background: "$neutralFull",
  borderRadius: "4px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
});

export const ExportItem = styled("button", {
  display: "flex",
  alignItems: "center",
  margin: "0.1rem 0",
  padding: "0.3rem",
  gap: "0.4rem",
  background: "transparent",
  borderRadius: "4px",
  border: "none",
  color: "$textNormal",
  cursor: "pointer",

  "&:hover": {
    background: "$popoverSelect",
  },
});
