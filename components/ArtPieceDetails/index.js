// Renders the details of art needs image, title, artist, year, Genre
import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton";
import { useArtStore } from "../../stores/artpieces";
import styled from "styled-components";
import { useRouter } from "next/router";

export function ArtPieceDetails() {
  const { artPiecesInfo } = useArtStore();

  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  let element = artPiecesInfo.find(
    (ele) => ele.slug.toLowerCase().replace(" ", "-") === slug
  );

  return (
    <>
      <section>
        <>
          <h3>Name:{element.name}</h3>
          <p>Artist:{element.artist}</p>
          <Image
            src={element.imageSource}
            alt="Art piece image"
            width={200}
            height={200}
          />
          <p>Year: {element.year}</p>
          <p>Genre: {element.genre}</p>
          <div>
            <FavoriteButton />
          </div>
        </>
      </section>
    </>
  );
}

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 10px;
  gap: 10px;
`;
const styledLi = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
