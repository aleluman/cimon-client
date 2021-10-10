import { styled } from "@/shared/constants/stitches";

export const NavContainer = styled("nav", {
  height: "2.4rem",
  zIndex: 1,
  gridArea: "navbar",
  display: "flex",
  background: "$neutralLightest",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "$subtleShadow",
  color: "$textNormal",
  userSelect: "none",
});

export const HomeContainer = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "2.4rem",
  width: "2.4rem",
  cursor: "pointer",
  borderRight: "1px solid $borderLight",

  "&:hover path": {
    fill: "$primaryAccent",
  },
});

export const ProjectNav = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  flexGrow: 1,
  fontSize: "0.85rem",
  padding: "0.8rem",
});

export const AppTitle = styled("span", {
  fontWeight: 550,
  color: "$textDull",
});
