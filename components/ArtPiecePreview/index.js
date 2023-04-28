// This should render a preview with title, image and artist

import Image from "next/image";

export function ArtPiecePreview({ name, artist, imageSource }) {
  return (
    <section>
      <>
        <h3>{name}</h3>
        <p>{artist}</p>
        <Image
          src={imageSource}
          alt="Art piece image"
          width={200}
          height={200}
        />
      </>
    </section>
  );
}
