import { styled } from "@/shared/constants/stitches";

export const ZoomBarContainer = styled("div", {
  display: "flex",
  gap: "0.2rem",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "0.4rem",
  backdropFilter: "blur(10px)",
  right: "20.4rem",
  background: "$popoverBackground",
  padding: "0.3rem",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$subtleShadow",
  transition: "right ease 0.5s",
  userSelect: "none",

  variants: {
    tilted: {
      true: {
        right: "0.4rem",
      },
    },
    mockup: {
      true: {
        right: "22.4rem",
      },
    },
  },

  compoundVariants: [{ tilted: true, mockup: true, css: { right: "0.4rem" } }],
});

export const Divider = styled("span", {
  height: "1.8rem",
  width: 0,
  borderLeft: "1px solid $popoverBorder",
  margin: "0 0.3rem",
});
