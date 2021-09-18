import { styled } from "@/shared/constants/stitches.config";

export const RoleMenuContainer = styled("div", {
  display: "flex",
  gap: "0.2rem",
  position: "absolute",
  left: "50%",
  padding: "0.3rem",
  backdropFilter: "blur(12px)",
  background: "$popoverBackground",
  border: "2px solid $primaryAccent",
  borderRadius: "8px",
});

export const IconSelect = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  fontSize: "0.75rem",
  cursor: "pointer",
  border: "1px solid $popoverBorder",
  borderRadius: "4px",
  padding: "0 0.2rem",
  transition: "box-shadow 0.25s ease",

  "&:hover": {
    boxShadow: "$hoverShadowSmall",
  },
});

export const Divider = styled("span", {
  height: "1.8rem",
  width: 0,
  borderLeft: "1px solid $popoverBorder",
  margin: "0 0.3rem",
});
