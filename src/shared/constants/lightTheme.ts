import { createTheme } from "./stitches";

export const lightTheme = createTheme({
  colors: {
    primary: "#4883d2",
    primaryAccent: "#3080eb",
    primaryLight: "#D3E5FA",
    yellow: "#f1c410",
    red: "#e04545",
    green: "#46A257",
    neutralDarker: "#e9eef9",
    neutralDark: "#e6edf8",
    neutralLight: "#f4f7fd",
    neutralLighter: "#f5f9ff",
    neutralLightest: "#fafcfd",
    neutralFull: "#ffffff",
    neutralContrast: "violet",
    textNormal: "#364f77",
    textImportant: "#222d55",
    textPrimary: "#506BB0",
    textDull: "#58739b",
    textReverse: "#fafcff",
    border: "#d8e5f5",
    borderLight: "#d8e5f5",
    borderDark: "#d8e5f5",
    iconNormal: "#86a1c9",
    iconGray: "#7E96B9",
    iconDisabled: "#d0dde9",
    textError: "#cb2222",
    toastBackground: "#ffffff33",
    dialogBackground: "#ffffff59",
    popoverBackground: "#ffffffb6",
    popoverSelect: "#ccd6f09c",
    popoverBorder: "#ccdcff",
    subtleShadow: "#0b0b0c66",
    shadow: "#0b0b0c80",
    strongShadow: "#0b0b0c",
    redShadow: "#e7a9a9",
  },
  shadows: {
    subtleShadow: "0 0 12px #0b0b0c10",
    subtlerShadow: "0 0 8px #0b0b0c09",
    borderedPrimary: "0 0 0 3px #3080eb",
    borderedPrimarySmall: "0 0 0 1px #3080eb",
    hoverShadowSmall: "0 0 8px #0b0b0c30",
    hoverShadowLarge: "0 0 18px -4px #0b0b0c44",
  },
});
