// This should render a random Picture that accepts image and artist as props

import { useEffect, useState } from "react";

import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";

export function SpotLight() {
  const { artPiecesInfo } = useArtStore();

  const [randomObject, setRandomObject] = useState({});

  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    setRandomObject(randomObject);
  };

  useEffect(() => {
    getRandomObject(artPiecesInfo);
  }, [randomObject, artPiecesInfo]);

  console.log(randomObject);

  return (
    <>
      <section>
        <Image
          src={randomObject.imageSource}
          alt="Art piece image"
          width={200}
          height={200}
        />
        <p> artist:{randomObject.artist}</p>
      </section>
    </>
  );
}
