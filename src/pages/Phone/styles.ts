import { styled } from "@/shared/constants/stitches";

export const MainPhone = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$neutralDark",
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "2px solid $borderPhone",
  overflow: "hidden",
});

export const MainContent = styled("div", {
  height: "100%",
  maxHeight: "100%",
  overflow: "hidden",
});

export const TabList = styled("div", {
  display: "flex",
  width: "100%",
  background: "$neutralLightest",
  justifyContent: "space-between",
  boxShadow: "$subtleShadow",
});

export const TabButton = styled("button", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  outline: "none",
  height: "3rem",
  width: "100%",
  fontSize: "0.8rem",
  color: "$textDull",
  transition: "color ease 0.2s",

  variants: {
    selected: {
      true: {
        color: "$primaryAccent",
        fontWeight: 650,
        borderBottom: "3px solid $primaryAccent",
        "& path": {
          fill: "$primaryAccent",
        },
      },
    },
  },
});
