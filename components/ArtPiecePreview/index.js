// This should render a preview with title, image and artist

import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";
import { useRouter } from "next/router";

export function ArtPiecePreview() {
  const { artPiecesInfo } = useArtStore();

  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  let element = artPiecesInfo.find(
    (ele) => ele.slug.toLowerCase().replace(" ", "-") === slug
  );

  return (
    <section>
      <>
        <h3>{element.name}</h3>
        <p>{element.artist}</p>
        <Image
          src={element.imageSource}
          alt="Art piece image"
          width={200}
          height={200}
        />
      </>
      ;
    </section>
  );
}
