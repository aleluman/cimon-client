import { styled } from "@/shared/configs/stitches";

export const AmbitButton = styled("button", {
  display: "flex",
  maxWidth: "16rem",
  gap: "0.4rem",
  padding: "0.4rem 0.6rem",
  background: "transparent",
  border: "1px solid $popoverBorder",
  borderRadius: "8px",
  color: "$textImportant",
  cursor: "pointer",
  transition: "box-shadow ease 0.25s",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },

  "& p": {
    margin: 0,
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

export const AmbitMenu = styled("div", {
  display: "flex",
  position: "absolute",
  marginTop: "0px",
  maxWidth: "16rem",
  maxHeight: "22rem",
  backdropFilter: "blur(12px)",
  padding: "0.2rem",
  background: "$popoverBackground",
  flexDirection: "column",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
  overflow: "auto",
  zIndex: 1,
});

export const AmbitItem = styled("button", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  gap: "1rem",
  background: "transparent",
  color: "$textNormal",
  border: "none",
  padding: "0.4rem",
  paddingRight: "0.4rem",
  borderRadius: "4px",
  cursor: "pointer",

  "& p": {
    margin: 0,
    display: "block",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  "&:hover": {
    background: "$popoverSelect",
  },

  variants: {
    selected: {
      true: {
        fontWeight: 700,
        color: "$textImportant",
      },
    },
  },
});
