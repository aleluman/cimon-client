import { styled } from "@/shared/constants/stitches";

export const HiddenCheckbox = styled("input", {
  display: "none",
});

export const Container = styled("label", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  padding: "0.5rem",
  borderRadius: "8px",
  margin: "0 0.4rem",
  color: "$textDull",
  cursor: "pointer",
  transition: "all ease 0.25s",

  "&:hover": {
    background: "$primaryLight",
  },

  variants: {
    checked: {
      true: {
        "& path": {
          fill: "$primaryAccent",
        },
      },
    },
  },
});
