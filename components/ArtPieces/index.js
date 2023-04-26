// this component should render a list of Art pieces
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";

export function ArtPieces() {
  const url = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(url);
  console.log(data);

  const setArtPiecesInfo = useArtStore((state) => state.setArtPiecesInfo);
  setArtPiecesInfo(data);

  const artPieces = useArtStore((state) => state.getArtPieces());
  console.log(artPieces);

  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>Is loading</div>;
  if (data) {
    //const randomshit = useArtStore.set;
    //console.log(randomshit);
    // here pass to zustand the data and then grab it.

    return;
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
}
