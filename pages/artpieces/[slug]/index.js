import { ArtPiecePreview } from "../../../components/ArtPiecePreview";
import { ArtPieceDetails } from "../../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import { CommentForm } from "../../../components/CommentForm";
import { Comments } from "../../../components/Comments";
import { useState } from "react";
import styled from "styled-components";

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
    <StyledDiv>
      <div>
        <ArtPieceDetails />
      </div>

      <div>
        <CommentForm handleSubmit={handleSubmit} />
        <Comments allComments={allComments} />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;
  align-items: center;
  gap: 100px;
  padding-top: 100px;
`;
