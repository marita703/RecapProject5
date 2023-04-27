// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";
import { uid } from "uid";

export function Comments({ allComments }) {
  // something.push(coms);

  return (
    <>
      <h1>this is a comment section</h1>
      <p>
        <ul>
          {allComments.map((ele) => {
            return <li key={ele}>{ele}</li>;
          })}
        </ul>
      </p>
    </>
  );
}
