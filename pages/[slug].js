import { CommentForm } from "../components/CommentForm";
import { Comments } from "../components/Comments";
import { useState } from "react";

export function SlugFunc() {
  const [allComments, setAllComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setAllComments((current) => {
      return [...current, form.elements.leavecomment.value];
    });
  }
  //renders the comments for the comment sections

  return (
    ////this shit needs to be somewhere for comment section so.

    <div>
      <h1>Hello from Next.js</h1>

      <CommentForm handleSubmit={handleSubmit} />
      <Comments coms={leftComment} />
    </div>
  );
}
