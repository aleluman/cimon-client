import { styled } from "@/shared/configs/stitches";

export const SidebarContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",
  minWidth: "24rem",
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
