import { create } from "zustand";

export const useArtStore = create((set, get) => ({
  artPiecesInfo: [],

  setArtPiecesInfo: (newArtPiecesInfo) => {
    if (newArtPiecesInfo)
      set((state) => ({
        artPiecesInfo: [...state.artPiecesInfo, ...newArtPiecesInfo],
      }));
  },

  getArtPieces: () => get().artPiecesInfo,
}));
