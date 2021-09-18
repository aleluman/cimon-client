import { styled } from "@/shared/constants/stitches.config";

export const IconButton = styled("div", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  padding: "0.4rem",
  background: "transparent",

  "&:hover": {
    background: "$neutralDarker",
  },

  "&:hover path": {
    fill: "$primaryAccent",
  },

  variants: {
    disabled: {
      true: {
        cursor: "default",
        pointerEvents: "none",
        "&:path": {
          fill: "$iconDisabled",
        },
      },
    },
    working: {
      true: {
        boxShadow: "$borderedPrimarySmall, inset 0 0 5px $primaryAccent",
        background: "$neutralLight",
      },
    },
  },
});
