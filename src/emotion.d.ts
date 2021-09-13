import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      primaryAccent: string;
      primaryLight: string;
      yellow: string;
      red: string;
      neutralDarker: string;
      neutralDark: string;
      neutralLight: string;
      neutralLighter: string;
      neutralLightest: string;
      neutralFull: string;
      neutralContrast: string;
      textNormal: string;
      textImportant: string;
      textDull: string;
      textReverse: string;
      border: string;
      borderLight: string;
      borderDark: string;
      iconNormal: string;
      iconGray: string;
      iconDisabled: string;
      textError: string;
      toastBackground: string;
      dialogBackground: string;
      popoverBackground: string;
      popoverSelect: string;
      popoverBorder: string;
      subtleShadow: string;
      shadow: string;
      strongShadow: string;
      redShadow: string;
    };
  }
}
