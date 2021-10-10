import { styled } from "@/shared/constants/stitches";

export const SidebarContainer = styled("aside", {
  display: "flex",
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
  gap: "0.2rem",
  margin: 0,
  color: "$textImportant",
  fontSize: "1rem",
  fontWeight: 500,
  marginBottom: "0.8rem",
});

export const ProcessesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  padding: "0.6rem 0",
  width: "100%",
});
