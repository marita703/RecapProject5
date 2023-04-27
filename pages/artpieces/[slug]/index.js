import { ArtPiecePreview } from "../../../components/ArtPiecePreview";
import { ArtPieceDetails } from "../../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import { CommentForm } from "../../../components/CommentForm";
import { Comments } from "../../../components/Comments";
import { useState } from "react";

export default function SlugPiecePreview() {
  const [allComments, setAllComments] = useState(["something"]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setAllComments((current) => {
      return [...current, form.elements.leavecomment.value];
    });
  }

  return (
    <div>
      <h1>hola</h1>
      <ArtPiecePreview />
      <ArtPieceDetails />
      <CommentForm handleSubmit={handleSubmit} />
      <Comments allComments={allComments} />
    </div>
  );
}
