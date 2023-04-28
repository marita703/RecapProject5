// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";

export function Comments({ allComments }) {
  // something.push(coms);

  return (
    <>
      <h1>this is a comment section</h1>
      <ul>
        {allComments.map((ele) => {
          return <li key={ele}>{ele}</li>;
        })}
      </ul>
    </>
  );
}
