// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";

export function Comments({ allComments }) {
  // something.push(coms);

  return (
    <>
      <h1>this is a comment section</h1>

      <p>
        <ul>
          {allComments.map((comment) => (
            <li key={comment.timestamp}>
              {comment.text} ({new Date(comment.timestamp).toLocaleString()})
            </li>
          ))}
        </ul>
      </p>

    </>
  );
}
