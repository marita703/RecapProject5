// this component should render a list of Art pieces
import { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";

export function ArtPieces() {
  const url = "https://example-apis.vercel.app/api/art";

  const { artPiecesInfo, setArtPiecesInfo } = useArtStore();

  const { data, error, isLoading } = useSWR(url);

  useEffect(() => {
    setArtPiecesInfo(data);
  }, [data]);

  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>Is loading</div>;

  console.log("data: ", data);
  console.log("Art Pieces: ", artPiecesInfo);

  return <h1>Hola</h1>;
  // <ul>
  //   {data.map((artPiece) => {
  //     <li key={artPiece.slug}>
  //       <h3>{artPiece.name}</h3>
  //       <p>{artPiece.artist}</p>
  //       <Image src={artPiece.imageSoure} alt="Art piece image" />
  //     </li>;
  //   })}
  //</ul>
}
