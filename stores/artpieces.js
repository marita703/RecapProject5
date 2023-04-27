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

  handleFavorite: (slug) => {
    // console.log(slug);
    set((state) => ({
      artPiecesInfo: state.artPiecesInfo.map((artPiece) => {
        if (slug === artPiece.slug) {
          return { ...artPiece, isFavorite: !artPiece.isFavorite };
        } else {
          return artPiece;
        }
      }),
    }));

    // get().artPiecesInfo.map((artPiece) => {
    //   if (slug === artPiece.slug) {
    //     return { ...artPiece, isFavorite: !artPiece.isFavorite };
    //   } else {
    //     return artPiece;
    //   }
    // });
  },
}));
