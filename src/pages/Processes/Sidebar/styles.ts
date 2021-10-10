import { styled } from "@/shared/constants/stitches";

export const SidebarContainer = styled("aside", {
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  minWidth: "20rem",
  padding: "1rem",
  height: "100%",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
  transition: "transform ease 0.5s",
  userSelect: "none",
  overflow: "visible",
  willChange: "transform",

  variants: {
    hidden: {
      true: {
        transform: "translateX(100%)",
      },
    },
  },
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
});
