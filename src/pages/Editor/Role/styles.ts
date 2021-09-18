import { styled } from "@/shared/constants/stitches.config";
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

  variants: {
    active: {
      true: {
        boxShadow: "$borderedPrimary",
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
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  fontSize: "0.85rem",
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
