// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";

export function Comments({ allComments }) {
  // something.push(coms);

  return (
    <>
      <h1>this is a comment section</h1>

      {allComments.map((comment, index) => (
        <ul key={index + 1}>
          <li key={comment.timestamp}>{comment.text}</li>
          <li key={index}> {new Date(comment.timestamp).toLocaleString()}</li>
        </ul>
      ))}
    </>
  );
}
