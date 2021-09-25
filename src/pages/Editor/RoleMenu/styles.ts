import { styled } from "@/shared/configs/stitches";

export const RoleMenuContainer = styled("div", {
  display: "flex",
  gap: "0.2rem",
  padding: "0.3rem",
  backdropFilter: "blur(12px)",
  background: "$popoverBackground",
  border: "2px solid $primaryAccent",
  borderRadius: "8px",
  maxHeight: "3rem",
});

export const IconSelect = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.9rem",
  color: "$textNormal",
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
  margin: "0 0.1rem",
});
