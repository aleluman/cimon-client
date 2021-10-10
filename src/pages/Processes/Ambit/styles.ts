import { styled } from "@/shared/constants/stitches";

export const AmbitText = styled("a", {
  textDecoration: "none",
  display: "flex",
  color: "$textNormal",
  fontWeight: 550,
  fontSize: "0.9rem",
  width: "100%",
  padding: "0.5rem 0.6rem",
  background: "$neutralFull",
  borderRadius: "8px",
  transition: "box-shadow 0.25s ease",

  "&:hover": {
    boxShadow: "$subtleShadow",
  },
});

export const AmbitContainer = styled("div", {
  position: "relative",
});
