import { styled } from "@/shared/configs/stitches";

export const SelectContainer = styled("div", {});

export const SelectButton = styled("button", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "$textNormal",
  width: "100%",
  padding: "0.5rem",
  border: "1px solid $popoverBorder",
  background: "$neutralFull",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "box-shadow 0.25s ease",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },
});

export const SelectMenu = styled("ul", {
  background: "$popoverBackground",
  backdropFilter: "blur(12px)",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$hoverShadowLarge",
  padding: "0.2rem",
  margin: 0,
});

export const SelectOption = styled("li", {
  display: "flex",
  fontSize: "0.8rem",
  listStyle: "none",
  color: "$textNormal",
  padding: "0.3rem",
  cursor: "pointer",
  borderRadius: "4px",

  "&:hover": {
    background: "$popoverSelect",
  },
});
