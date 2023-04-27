// this will render a favorite button, needs to be rendered in spotlight, ArtpiecePreview, artPiece Details
import { useArtStore } from "../../stores/artpieces";

export function FavoriteButton({ slug, isFavorite }) {
  const { handleFavorite } = useArtStore();

  return (
    <button onClick={() => handleFavorite(slug)}>
      {isFavorite ? "❤️" : "🖤"}
    </button>
  );
}
