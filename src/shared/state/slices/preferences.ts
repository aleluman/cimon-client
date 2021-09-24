import { SetState } from "zustand";

export type PreferencesSlice = {
  theme: "light" | "dark";
  showSidebar: boolean;
  setTheme: (theme: "light" | "dark") => void;
  setShowSidebar: (value: boolean) => void;
};

export const createPreferencessSlice = (set: SetState<PreferencesSlice>): PreferencesSlice => ({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  showSidebar: true,
  setTheme: (theme) => set(() => ({ theme })),
  setShowSidebar: (value) => set(() => ({ showSidebar: value })),
});
