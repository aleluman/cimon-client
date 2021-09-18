import { styled } from "@/shared/constants/stitches.config";

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
