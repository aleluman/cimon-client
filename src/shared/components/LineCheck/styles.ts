import { styled } from "@/shared/constants/stitches";

export const Container = styled("label", {
  position: "relative",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  padding: "0.1rem 0",
  fontFamily: "inherit",
});

export const Label = styled("span", {
  fontSize: "0.85rem",
  fontFamily: "inherit",
  color: "$textNormal",
});

export const CheckMark = styled("span", {
  position: "absolute",
  left: "0.3rem",
  top: "0.25rem",

  "& path": {
    fill: "white",
  },
});

export const Check = styled("input", {
  appearance: "none",
  width: "1rem",
  height: "1rem",
  borderRadius: "4px",
  border: "1px solid $iconNormal",
  cursor: "pointer",
  transition: "background ease 0.2s",

  "&:hover": {
    backgroundColor: "$neutralDark",
  },

  "&:checked": {
    background: "$primary",
    border: "1px solid $primary",
  },
});
