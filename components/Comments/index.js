// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";
import { uid } from "uid";

export function Comments(coms = "a thing") {
  const [something, setThing] = useState([]);

  something.push(coms);

  return (
    <>
      <h1>this is a comment section</h1>
      <p>
        {something.map((element) => {
          return <p key={uid}>{element.coms}</p>;
        })}
      </p>
    </>
  );
}
