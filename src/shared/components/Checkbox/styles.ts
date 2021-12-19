import { styled } from "@/shared/constants/stitches";

export const HiddenCheckbox = styled("input", {
  display: "none",
});

export const Container = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  borderRadius: "8px",
  margin: "0 0.4rem",
  color: "$textDull",
  cursor: "pointer",
  transition: "all ease 0.25s",
  userSelect: "none",

  "&:hover": {
    background: "$primaryLight",
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: "none",
      },
    },

    checked: {
      true: {
        "& path": {
          fill: "$primaryAccent",
        },
      },
    },

    inherit: {
      true: {
        "& path": {
          fill: "none",
          stroke: "$primaryAccent",
          strokeWidth: "1px",
          strokeLinejoin: "round",
        },
      },
    },

    size: {
      small: {
        padding: "0.3rem",
      },
      large: {
        padding: "0.5rem",
      },
    },
  },
});
