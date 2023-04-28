import { FavoriteButton } from "../components/FavoriteButton";
import { useArtStore } from "../stores/artpieces";
import styled from "styled-components";
import Link from "next/link";
import { ArtPiecePreview } from "../components/ArtPiecePreview";

export default function Favorites() {
  const { artPiecesInfo } = useArtStore();
  console.log("Art pieces info: ", artPiecesInfo);
  console.log("I am favourite");

  const favArtPieces = artPiecesInfo.filter(
    (favPiece) => favPiece.isFavorite == true
  );

  return (
    <>
      {favArtPieces.map((artPiece) => {
        return (
          <>
            <StyledUL>
              <styledLi>
                <Link href={`/artpieces/${artPiece.slug}`} key={artPiece.slug}>
                  <ArtPiecePreview
                    name={artPiece.name}
                    artist={artPiece.artist}
                    imageSource={artPiece.imageSource}
                  />
                </Link>
                <div>
                  <FavoriteButton
                    slug={artPiece.slug}
                    isFavorite={artPiece.isFavorite}
                  />
                </div>
              </styledLi>
            </StyledUL>
          </>
        );
      })}
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
