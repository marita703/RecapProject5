// this component should render a list of Art pieces

import Image from "next/image";

import { useArtStore } from "../../stores/artpieces";
import Link from "next/link";

export function ArtPieces() {
  const { artPiecesInfo } = useArtStore();

  console.log("data: ", artPiecesInfo);

  return (
    <>
      <ul>
        {artPiecesInfo.map((artPiece) => {
          return (
            <li key={artPiece.slug}>
              <Link href={`/artpieces/${artPiece.slug}`}>
                <h3>{artPiece.name}</h3>
                <p>{artPiece.artist}</p>
                <Image
                  src={artPiece.imageSource}
                  alt="Art piece image"
                  width={200}
                  height={200}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
