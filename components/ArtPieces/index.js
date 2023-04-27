import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";
import styled from "styled-components";

export function ArtPieces() {
  const { artPiecesInfo } = useArtStore();

  return (
    <>
      <StyledUL>
        {artPiecesInfo.map((artPiece, index) => {
          return (
            <styledLi key={index}>
              <p className="styledLi_title">{artPiece.name}</p>
              <p>{artPiece.artist}</p>
              <Image
                src={artPiece.imageSource}
                alt="Art piece image"
                width={200}
                height={200}
              />
            </styledLi>
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
const styledLi = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
