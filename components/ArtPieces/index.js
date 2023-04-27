// this component should render a list of Art pieces

import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";

export function ArtPieces() {
  const { artPiecesInfo } = useArtStore();

  return (
    <>
      <h1>Hola</h1>;
      <ul>
        {artPiecesInfo.map((artPiece, index) => {
          return (
            <li key={index}>
              <h3>{artPiece.name}</h3>
              <p>{artPiece.artist}</p>
              <Image
                src={artPiece.imageSource}
                alt="Art piece image"
                width={200}
                height={200}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
