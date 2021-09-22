import { styled } from "@/shared/configs/stitches";

export const PathContainer = styled("g", {
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
  },
});

export const ClickPath = styled("path", {
  strokeWidth: "16px",
  stroke: "transparent",
  fill: "none",
  pointerEvents: "auto",
});
