import { FavoriteButton } from "../FavoriteButton";
import { useArtStore } from "../../stores/artpieces";
import styled from "styled-components";
import Link from "next/link";
import { ArtPiecePreview } from "../ArtPiecePreview";

export function ArtPieces() {
  const { artPiecesInfo } = useArtStore();
  console.log("Art pieces info: ", artPiecesInfo);

  return (
    <>
      <StyledUL>
        {artPiecesInfo.map((artPiece) => {
          return (
            <>
              <div>
                <StyledLi>
                  <Link
                    href={`/artpieces/${artPiece.slug}`}
                    key={artPiece.slug}
                  >
                    <ArtPiecePreview
                      name={artPiece.name}
                      artist={artPiece.artist}
                      imageSource={artPiece.imageSource}
                    />
                  </Link>
                </StyledLi>
                <div>
                  <FavoriteButton
                    slug={artPiece.slug}
                    isFavorite={artPiece.isFavorite}
                  />
                </div>
              </div>
            </>
          );
        })}
      </StyledUL>
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
const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
