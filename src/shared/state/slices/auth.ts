import { SetState } from "zustand";

export type AuthSlice = {
  access: string | null;
  refresh: string | null;
  username: string | null;
  setAccess: (value: string | null) => void;
  setRefresh: (value: string | null) => void;
  setUsername: (value: string | null) => void;
};

export const createAuthSlice = (set: SetState<AuthSlice>): AuthSlice => ({
  access: null,
  refresh: null,
  username: null,
  setAccess: (access) => set(() => ({ access })),
  setRefresh: (refresh) => set(() => ({ refresh })),
  setUsername: (username) => set(() => ({ username })),
});
