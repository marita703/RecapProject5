// Returns a form to writte comment and has onSubmitComent prop. It has to have a submit button

import { Comments } from "../Comments";
import { useState } from "react";

export function CommentForm() {
  const [leftComment, setComment] = useState("something");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setComment(form.elements.leavecomment.value);
    console.log(leftComment);
    return setComment;
  }
  return (
    <>
      <h3>Leave your comment here!</h3>
      <form onSubmit={handleSubmit}>
        <label for="leavecomment">Leave your comment here!</label>
        <p></p>
        <textarea
          id="leavecomment"
          name="leavecomment"
          placeholder="Write your comment here!"
          rows="10"
          cols="40"
        ></textarea>
        <p></p>
        <button type="submit">Submit your comment!</button>
      </form>
      <Comments coms={leftComment} />
    </>
  );
}
