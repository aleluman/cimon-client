import { styled } from "@/shared/constants/stitches";

export const ProcessContainer = styled("button", {
  padding: "1rem",
  width: "100%",
  minHeight: "3.4rem",
  color: "$textNormal",
  background: "transparent",
  textDecoration: "none",
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
        color: "$textImportant",
        fontWeight: 500,

        "&:hover": {
          background: "$primaryLight",
          boxShadow: "inset $subtleShadow",
        },
      },
    },
  },
});

export const ProcessName = styled("span", {
  flex: 1,
  textAlign: "left",
  fontSize: "0.95rem",
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
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
  fontWeight: 700,
  fontSize: "0.9rem",
});
