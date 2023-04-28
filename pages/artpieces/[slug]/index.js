import { ArtPieceDetails } from "../../../components/ArtPieceDetails";

import { CommentForm } from "../../../components/CommentForm";
import { Comments } from "../../../components/Comments";
import { useState } from "react";
import styled from "styled-components";

export default function SlugPiecePreview() {
  const [allComments, setAllComments] = useState([]);

  function handleSubmit(event) {
    // event.preventDefault();
    // const form = event.target;
    // setAllComments((current) => {
    //   return [...current, form.elements.leavecomment.value];
    // });
    event.preventDefault();
    const form = event.target;
    const newComment = {
      text: form.elements.leavecomment.value,
      timestamp: new Date().toISOString(), // add timestamp to comment object
    };
    setAllComments((current) => {
      return [...current, newComment];
    });
    form.reset();
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
