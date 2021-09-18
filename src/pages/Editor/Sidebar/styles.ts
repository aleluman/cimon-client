import { styled } from "@/shared/constants/stitches.config";

export const SidebarContainer = styled("aside", {
  display: "flex",
  position: "absolute",
  top: 0,
  right: 0,
  flexDirection: "column",
  width: "20rem",
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

export const SidebarWrapper = styled("div", {
  overflowY: "auto",
  height: "100%",
});

export const HideButton = styled("button", {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  height: "4rem",
  width: "0.8rem",
  padding: 0,
  borderRadius: "4px 0 0 4px",
  boxShadow: "$subtleShadow",
  top: "4.5rem",
  left: "-0.8rem",
  background: "$primary",
  border: "none",
  borderRight: "1px solid $borderDark",
  transform: "translateY(-100%)",
  cursor: "pointer",

  "& path": {
    fill: "white",
  },
});

export const Title = styled("h1", {
  display: "flex",
  gap: "0.2rem",
  margin: 0,
  color: "$textImportant",
  fontSize: "1rem",
  fontWeight: 500,
});

export const TitleName = styled("span", {
  display: "inline-block",
  fontWeight: 700,
  gap: "0.4rem",
  maxWidth: "10rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const SubTitle = styled("h2", {
  fontWeight: 400,
  color: "$textNormal",
  fontSize: "0.85rem",
  margin: "1rem 0 0.4rem 0",
});

export const Help = styled("p", {
  color: "$textDull",
  fontSize: "0.8rem",
  padding: 0,
  lineHeight: "1.3rem",
});

export const Description = styled("textarea", {
  marginTop: "0.5rem",
  borderRadius: "8px",
  fontFamily: "inherit",
  color: "$textNormal",
  width: "100%",
  minHeight: "8rem",
  border: "1px solid $borderDark",
  resize: "none",
  fontSize: "0.85rem",
  padding: "0.5rem",
  background: "$neutralFull",
});
