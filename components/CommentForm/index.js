// Returns a form to writte comment and has onSubmitComent prop. It has to have a submit button
import styled from "styled-components";

export function CommentForm({ handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>

        <label name="leavecomment">Leave your comment here!</label>

        <p></p>
        <textarea
          id="leavecomment"
          name="leavecomment"
          placeholder="Write your comment here"
          rows="10"
          cols="40"
        ></textarea>
        <p></p>
        <StyledButton type="submit">Submit your comment</StyledButton>
      </form>
    </>
  );
}

const StyledButton = styled.button`
  background-color: orange;
  border: none;
  border-radius: 8px;
  padding: 10px;
`;
