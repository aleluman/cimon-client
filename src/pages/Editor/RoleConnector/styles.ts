import { styled } from "@/shared/constants/stitches";

export const ButtonConnector = styled("button", {
  position: "absolute",
  bottom: "1.9rem",
  right: "-0.55rem",
  border: "6px solid $primary",
  width: "1.1rem",
  height: "1.1rem",
  padding: 0,
  borderRadius: "100px",
  boxShadow: "$hoverShadowSmall",
  cursor: "grab",
  touchAction: "none",
  transition: "transform ease 0.2s, background ease 0.2s, border ease 0.2s",

  "&:hover": {
    border: "6px solid $primaryAccent",
    transform: "scale(1.5)",
  },

  variants: {
    active: {
      true: {
        border: "6px solid $primaryAccent",
      },
    },
    using: {
      true: {
        visibility: "hidden",
        pointerEvents: "none",
      },
    },
  },
});
