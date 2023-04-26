import { create } from "zustand";

export const useArtStore = create((set, get) => ({
  artPiecesInfo: [],

  onToggleFavorite: () => {},
}));
