import { keyframes, styled } from "@/shared/constants/stitches";

const rotate = keyframes({
  from: { transform: "rotate(0turn)" },
  to: { transform: "rotate(1turn)" },
});

export const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.2rem",
  appearance: "none",
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
  borderRadius: "4px",
  "-webkit-appearance": "none",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5,
    filter: "grayscale(60%)",
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
        "&:after": {
          content: "",
          width: "20px",
          height: "20px",
          border: "4px solid transparent",
          borderTopColor: "white",
          borderRadius: "50%",
          animation: `${rotate} 1s ease infinite`,
        },
      },
    },
  },

  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});
