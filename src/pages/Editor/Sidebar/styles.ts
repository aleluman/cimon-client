import { styled } from "@/shared/configs/stitches";

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
  transition: "transform ease 0.5s, width ease 0.3s",
  userSelect: "none",
  overflow: "visible",
  willChange: "transform",

  variants: {
    hidden: {
      true: {
        transform: "translateX(100%)",
      },
    },
    mockup: {
      true: {
        width: "26rem",
      },
    },
  },
});

export const SidebarWrapper = styled("div", {
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
  top: "50%",
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
  marginBottom: "0.8rem",
});

export const TitleName = styled("span", {
  flex: 1,
  display: "inline-block",
  fontWeight: 700,
  gap: "0.4rem",
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

  "&:focus": {
    border: "1px solid $primary",
    boxShadow: "$borderedPrimarySmall",
    outline: "none",
  },

  "&::placeholder": {
    color: "$textDull",
  },
});

export const Divider = styled("hr", {
  marginTop: "1.4rem",
  width: "calc(100%+2rem)",
  border: "none",
  borderTop: "1px solid $borderDark",
});
