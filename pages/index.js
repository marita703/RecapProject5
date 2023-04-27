import { ArtPiecePreview } from "../components/ArtPiecePreview";
import { ArtPieces } from "../components/ArtPieces";
import { SpotLight } from "../components/SpotLight";
import { Navigation } from "../components/Navigation";
export default function HomePage() {
  return (
    <div>


      <SpotLight />
      <ArtPieces />
      <Navigation />
    </div>
  );
}
