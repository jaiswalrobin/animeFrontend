// src/stores/useAppStore.ts
import { create } from "zustand";
import { SearchFilters } from "../types";

interface AppState {
  searchFilters: SearchFilters;
  setSearchFilters: (newFilters: Partial<SearchFilters>) => void;
}

const useAppStore = create<AppState>((set) => ({
  searchFilters: {
    genre: "all",
    season: "all",
    sortBy: "popularity",
  },
  setSearchFilters: (newFilters) =>
    set((state) => ({
      searchFilters: { ...state.searchFilters, ...newFilters },
    })),
}));

export { useAppStore };
