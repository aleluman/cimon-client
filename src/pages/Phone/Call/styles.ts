import { styled } from "@/shared/constants/stitches";

export const CallContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  background: "$neutralDark",
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "2px solid $borderPhone",
  overflow: "hidden",
  zIndex: 2,
});

export const HeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$neutralLight",
  padding: "1rem",
  fontSize: "1.1rem",
  fontWeight: 600,
  boxShadow: "$subtleShadow",
  color: "$textImportant",
});

export const ProgressContainer = styled("div", {
  flex: 1,
  gap: "0.6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "$textNormal",
});

export const WhiteBoard = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  background: "$neutralFull",
  margin: "0.3rem",
  height: "13rem",
  borderRadius: "4px",
  boxShadow: "$subtleShadow",
});

export const WhiteBoardIcons = styled("div", {
  display: "flex",
  gap: "0.4rem",
  padding: "0.3rem",
});

export const CallButton = styled("button", {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  appearance: "none",
  outline: "none",
  fontSize: "0.9rem",
  color: "$textImportant",
  background: "$primaryLight",
  padding: "0.7rem",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "$subtleShadow",
  border: "1px solid $borderPhone",

  "& path": {
    fill: "$textNormal",
  },

  variants: {
    red: {
      true: {
        border: "2px solid $red",
        background: "#dd222222",

        "& path": {
          fill: "red",
        },
      },
    },

    active: {
      true: {
        boxShadow: "0 0 0 3px $colors$primary",
      },
    },
  },
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  padding: "2rem 1rem",
});

export const VideoContainer = styled("div", {
  width: "150px",
  height: "150px",
  boxShadow: "$subtleShadow",
  position: "relative",
});

export const MeImage = styled("img", {
  position: "absolute",
  top: 0,
  right: 0,
  height: "2.4rem",
  width: "2.4rem",
});
