import { styled } from "@/shared/constants/stitches";

export const TagContainer = styled("div", {
  display: "flex",
  alignSelf: "flex-start",
  gap: "0.3rem",
  padding: "0.3rem",
  fontSize: "0.8rem",
  background: "$primaryLight",
  borderRadius: "4px",
  color: "$textPrimary",
  fontWeight: 500,

  "& path": {
    fill: "$textPrimary",
  },
});
