import { styled } from "@/shared/constants/stitches";

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
  transition: "transform ease 0.5s, width ease 0.2s",
  userSelect: "none",
  overflow: "visible",

  variants: {
    hidden: {
      true: {
        transform: "translateX(100%)",
      },
    },
    mockup: {
      true: {
        width: "22rem",
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
  margin: 0,
  marginBottom: "0.4rem",
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

export const PhoneContainer = styled("div", {
  width: "100%",
  height: "42rem",
  background: "$neutralDarker",
  boxShadow: "inset $subtleShadow",
  borderRadius: "8px",
  marginTop: "0.8rem",
});

export const MockupContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  paddingTop: "0.2rem",
});

export const TabContainer = styled("div", {
  borderBottom: "1px solid $borderDark",
  marginBottom: "0.6rem",
});

export const TabButton = styled("button", {
  background: "transparent",
  border: "none",
  padding: "0.4rem",
  cursor: "pointer",
  color: "$textDull",

  variants: {
    active: {
      true: {
        borderBottom: "3px solid $primary",
        color: "$textNormal",
      },
    },
  },
});
