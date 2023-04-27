import { ArtPiecePreview } from "../components/ArtPiecePreview";
import { ArtPieces } from "../components/ArtPieces";
import { CommentForm } from "../components/CommentForm";
import { Comments } from "../components/Comments";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <CommentForm />
    </div>
  );
}
