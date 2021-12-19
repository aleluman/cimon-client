import { styled } from "@/shared/constants/stitches";

export const PathContainer = styled("g", {
  variants: {
    disabled: {
      true: {
        pointerEvents: "none",
        opacity: 0.2,
      },
    },
  },

  "&:focus": {
    outline: "none",
  },
});

export const Path = styled("path", {
  stroke: "$iconNormal",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  pointerEvents: "auto",

  variants: {
    active: {
      true: {
        stroke: "$primaryAccent",
        strokeWidth: 3,
      },
    },
    dashed: {
      true: {
        strokeDasharray: "8 8",
      },
    },
  },
});

export const ClickPath = styled("path", {
  strokeWidth: "16px",
  stroke: "transparent",
  fill: "none",
  pointerEvents: "auto",
});
