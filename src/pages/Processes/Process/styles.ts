import { styled } from "@/shared/configs/stitches";

export const ProcessContainer = styled("button", {
  padding: "1rem",
  width: "100%",
  color: "$textImportant",
  background: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  gap: "1rem",
  cursor: "pointer",
  transition: "all 0.25s ease",

  "&:hover": {
    background: "$neutralDark",
  },

  variants: {
    active: {
      true: {
        background: "$primaryLight",
        "&:hover": {
          filter: "brightness(1.1)",
          background: "$primary",
        },
      },
    },
  },
});

export const ProcessName = styled("span", {
  flex: 1,
  textAlign: "left",
  fontSize: "0.9rem",
});

export const RoleCounter = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.4rem",
  height: "1.4rem",
  background: "$neutralFull",
  borderRadius: "4px",
  boxShadow: "$subtlerShadow",
});