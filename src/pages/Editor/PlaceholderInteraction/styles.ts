import { styled } from "@/shared/configs/stitches";

export const PlaceholderPath = styled("path", {
  stroke: "$primaryAccent",
  fill: "none",
  strokeWidth: "4px",
  strokeLinecap: "round",
  pointerEvents: "auto",
  cursor: "grabbing",
  transition: "stroke 0.25s ease",
});

export const Circle = styled("circle", {
  stroke: "$primaryAccent",
  strokeWidth: "1.4px",
  fill: "white",
  cursor: "grabbing",
  transition: "stroke 0.25s ease",
});
