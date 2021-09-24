import { styled } from "@/shared/configs/stitches";

export const OptionButton = styled("button", {
  display: "flex",
  gap: "0.3rem",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "100%",
  minWidth: "0",
  padding: "0.5rem",
  background: "$neutralFull",
  border: "none",
  fontSize: "0.8rem",
  borderLeft: "1px solid $borderDark",
  color: "$textNormal",
  cursor: "pointer",
  transition: "all ease 0.25s",

  "&:first-child": {
    border: "none",
  },

  "&:hover": {
    color: "$textImportant",
  },

  variants: {
    checked: {
      true: {
        background: "$primary",
        color: "white",
        boxShadow: "inset 0 4px 12px $colors$shadow",

        "&:hover": {
          boxShadow: "none",
          color: "white",
        },

        "& path": {
          fill: "white",
        },
      },
    },
  },
});
