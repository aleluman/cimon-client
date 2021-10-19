import { styled } from "@/shared/constants/stitches";

export const Path = styled("path", {
  fill: "$iconNormal",
  stroke: "$iconNormal",
  strokeWidth: 0,
  strokeLinejoin: "miter",

  variants: {
    active: {
      true: {
        fill: "$primaryAccent",
        stroke: "$primaryAccent",
      },
    },
    inherit: {
      true: {
        fill: "$neutralDarker",
        strokeWidth: 2,
      },
    },
  },
  compoundVariants: [
    {
      active: true,
      inherit: true,
      css: { fill: "$neutralDarker", stroke: "$primaryAccent", strokeWidth: 3 },
    },
  ],
});
