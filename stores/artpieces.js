import { create } from "zustand";

export const useArtStore = create((set, get) => ({
  artPiecesInfo: [],

  // setArtPiecesInfo: () =>
  //   set((state) => ({ artPiecesInfo: [...state.artPiecesInfo] })),

  // getArtPieces: () => get().artPiecesInfo,

  // onToggleFavorite: () => {},

  // set: set((idk) => ({ artPiecesInfo: idk.map() })),
}));
