import { styled } from "@/shared/constants/stitches";

export const SearchContainer = styled("div", {
  marginTop: "0.4rem",
  position: "relative",
});

export const SearchInput = styled("input", {
  height: "100%",
  width: "100%",
  background: "$neutralFull",
  padding: "0.6rem",
  border: "1px solid $borderDark",
  borderRadius: "8px",
  color: "$textNormal",

  "&:focus": {
    outline: "none",
    border: "1px solid $primaryAccent",
    boxShadow: "$borderedPrimarySmall",
  },

  "&::placeholder": {
    color: "$textDull",
  },
});

export const SearchButton = styled("button", {
  position: "absolute",
  right: "0.15rem",
  top: "0.25rem",
  display: "flex",
  alignItems: "center",
  padding: "0 0.4rem",
  height: "80%",
  background: "$neutralFull",
  border: "none",
  cursor: "pointer",
});
