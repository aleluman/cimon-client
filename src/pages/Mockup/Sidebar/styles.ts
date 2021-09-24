import { styled } from "@/shared/configs/stitches";

export const SidebarContainer = styled("aside", {
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  flexDirection: "column",
  width: "24rem",
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
