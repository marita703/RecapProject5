import { create } from "zustand";

// export const useArtStore = create((set, get) => ({
//   artPiecesInfo: [],

//   setArtPiecesInfo: (newArtPiecesInfo) =>
//     set((state) => ({
//       artPiecesInfo: [...state.artPiecesInfo, ...newArtPiecesInfo],
//     })),

//   getArtPieces: () => get().artPiecesInfo,

//   onToggleFavorite: () => {},

//   // set: set((idk) => ({ artPiecesInfo: idk.map() })),
// }));

export const useArtStore = create((set, get) => ({
  artPiecesInfo: [],

  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ artPiecesInfo: await response.json() });
  },

  getArtPieces: () => get().artPiecesInfo,
}));
