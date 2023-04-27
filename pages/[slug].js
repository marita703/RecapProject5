import { CommentForm } from "../components/CommentForm";
import { Comments } from "../components/Comments";
import { useState } from "react";

export function SlugFunc() {
  //renders the comments for the comment sections
  const [leftComment, setComment] = useState("something");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setComment(form.elements.leavecomment.value);
    console.log(leftComment);
  }
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <CommentForm handleSubmit={handleSubmit} />
      <Comments coms={leftComment} />
    </div>
  );
}
