import { SetState } from "zustand";

export type PreferencesSlice = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const createPreferencessSlice = (set: SetState<PreferencesSlice>): PreferencesSlice => ({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  setTheme: (theme) => set(() => ({ theme })),
});
