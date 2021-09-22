import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        primary: "#3d72b8",
        primaryAccent: "#3080eb",
        primaryLight: "#1f1f1f",
        yellow: "#f1c410",
        red: "#a30808",
        neutralDarker: "#222222",
        neutralDark: "#242424",
        neutralLight: "#2e2e2e",
        neutralLighter: "#313131",
        neutralLightest: "#3d3d3d",
        neutralFull: "#414141",
        neutralContrast: "#4d4d4d",
        textNormal: "#d5d6db",
        textImportant: "#eff0f7",
        textDull: "#969696",
        textReverse: "#fafcff",
        border: "#2e2e2e",
        borderLight: "#363636",
        borderDark: "#242424",
        iconNormal: "#acacac",
        iconGray: "#d3d3d3",
        iconDisabled: "#585858",
        textError: "#cb2222",
        toastBackground: "#44444477",
        dialogBackground: "#44444493",
        popoverBackground: "#4e4e4e9c",
        popoverSelect: "#66666652",
        popoverBorder: "#313131",
        subtleShadow: "#0b0b0c66",
        shadow: "#0b0b0c80",
        strongShadow: "#0b0b0c",
        redShadow: "#5a0e0e",
      },
      shadows: {
        subtleShadow: "0 0 12px #0b0b0c66",
        borderedPrimary: "0 0 0 3px #3080eb",
        borderedPrimarySmall: "0 0 0 1px #3080eb",
        hoverShadowSmall: "0 0 8px #0b0b0c80",
        hoverShadowLarge: "0 0 18px -4px #0b0b0c",
      },
    },
    media: {
      bp1: "(min-width: 480px)",
    },
    utils: {
      ellipsis: () => ({
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        minWidth: 0,
      }),
    },
  });
