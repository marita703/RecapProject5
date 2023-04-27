// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";

export function Comments(coms = "a thing") {
  const [something, setThing] = useState([]);

  something.push(coms);
  console.log(something);

  return (
    <>
      <h1>this is a comment section</h1>
      <p></p>
    </>
  );
}
