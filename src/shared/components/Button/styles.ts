import { styled } from "@/shared/constants/stitches";

export const ButtonContainer = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.2rem",
  appearance: "none",
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
  borderRadius: "4px",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },

  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$textReverse",

        "& path": {
          fill: "$textReverse",
        },

        "&:hover": {
          background: "$primaryAccent",
        },
      },
      success: {
        background: "#51B463",
        color: "white",
      },
      danger: {
        background: "Red",
      },
      secondary: {
        background: "transparent",
        color: "$textNormal",

        "&:hover": {
          background: "$neutralLightest",
          color: "$textImportant",
        },
      },
    },
    size: {
      medium: {
        fontSize: "0.9rem",
        padding: "0.5rem",
      },
      large: {
        marginTop: "0.6rem",
        padding: "0.6rem",
        fontSize: "1rem",
      },
    },
    isWorking: {
      true: {
        border: "red",
      },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});
