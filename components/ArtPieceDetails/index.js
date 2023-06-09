// Renders the details of art needs image, title, artist, year, Genre
import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton";
import { useArtStore } from "../../stores/artpieces";
import { useRouter } from "next/router";
import { PaletaDeColores } from "../PaletaDeColores";

export function ArtPieceDetails() {
  const { artPiecesInfo } = useArtStore();

  const router = useRouter();
  const { slug } = router.query;
  console.log("DETAILS: ", artPiecesInfo);

  let element = artPiecesInfo.find(
    (ele) => ele.slug.toLowerCase().replace(" ", "-") === slug
  );

  return (
    <section>
      <>
        <h3>Name: {element.name}</h3>
        <p>Artist: {element.artist}</p>
        <Image
          src={element.imageSource}
          alt="Art piece image"
          width={200}
          height={200}
        />
        <p>Year: {element.year}</p>
        <p>Genre: {element.genre}</p>
        <div>
          <FavoriteButton slug={element.slug} isFavorite={element.isFavorite} />
        </div>

        <PaletaDeColores slug={element.slug} />
      </>
    </section>
  );
}
