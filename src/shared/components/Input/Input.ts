import { styled } from "@/shared/constants/stitches";

export const Input = styled("input", {
  flex: 1,
  appearance: "none",
  background: "$neutralFull",
  height: "100%",
  border: "1px solid $borderDark",
  borderRadius: "8px",
  padding: "0.4rem",
  resize: "none",
  fontSize: "0.85rem",
  color: "$textNormal",

  "&:focus": {
    border: "1px solid $primary",
    boxShadow: "$borderedPrimarySmall",
    outline: "none",
  },

  "&::placeholder": {
    color: "$textDull",
  },
});
