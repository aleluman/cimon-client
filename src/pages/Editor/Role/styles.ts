import { styled } from "@/shared/constants/stitches";
import { roleDimentions } from "@/shared/constants/editorConfigs";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: `${roleDimentions.height}px`,
  width: `${roleDimentions.width}px`,
  background: "$neutralFull",
  boxShadow: "$subtleShadow",
  color: "$textNormal",
  borderRadius: "2px",
  touchAction: "none",
  userSelect: "none",
  transition: "box-shadow ease 0.25s",

  "&:focus": {
    outline: "none",
  },

  variants: {
    active: {
      true: {
        boxShadow: "$borderedPrimary",
        zIndex: 99,
      },
    },
    beingHovered: {
      true: {
        boxShadow: "$borderedPrimary, 0 0 12px 6px $colors$primary",
        zIndex: 99,
      },
    },
  },
});

export const Title = styled("span", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "0.8rem",
  padding: "0.3rem",
  borderBottom: "1px solid $borderLight",
});

export const Body = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.2rem",
  height: "100%",
  fontSize: "0.8rem",
});

export const Name = styled("span", {
  textAlign: "center",
  "-webkit-line-clamp": 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  wordWrap: "break-word",
});

export const Abstract = styled("p", {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontStyle: "italic",
  fontSize: "0.7rem",
  color: "$textDull",
  "&::before": {
    content: "«Abstract»",
  },
});

export const NameInput = styled("input", {
  textAlign: "center",
  maxWidth: "90%",
  padding: "0.2rem",
  color: "$textNormal",
  borderRadius: "4px",
  boxShadow: "$borderedPrimarySmall",
  background: "$neutralDarker",
  border: "1px solid $primaryAccent",
  fontSize: "inherit",

  "&:focus": {
    outline: "none",
  },
});
