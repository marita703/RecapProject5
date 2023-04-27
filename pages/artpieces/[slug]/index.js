import { ArtPiecePreview } from "../../../components/ArtPiecePreview";
import { ArtPieceDetails } from "../../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function artPiecePreview() {
  return (
    <div>
      <h1>hola</h1>
      <ArtPiecePreview />
      <ArtPieceDetails />
    </div>
  );
}
