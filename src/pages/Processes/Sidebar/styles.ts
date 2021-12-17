import { styled } from "@/shared/constants/stitches";

export const SidebarContainer = styled("aside", {
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  width: "22rem",
  minWidth: "22rem",
  padding: "1rem",
  height: "100%",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
  userSelect: "none",
  overflow: "hidden",
});

export const Title = styled("h1", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.2rem",
  margin: 0,
  color: "$textImportant",
  fontSize: "1.05rem",
  fontWeight: 500,
});

export const ProcessesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  width: "100%",
  overflow: "auto",
});

export const HelpText = styled("span", {
  color: "$textDull",
  fontSize: "0.8rem",
});
