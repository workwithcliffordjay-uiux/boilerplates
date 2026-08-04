import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  showLazy: true,
  setShowLazy: (value) => set({ showLazy: value }),
}));
