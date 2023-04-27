// This will render a list of the comments (createElement)
import { useEffect, useState } from "react";
import { uid } from "uid";

export function Comments({ coms }) {
  const [something, setThing] = useState([]);

  something.push(coms);

  return (
    <>
      <h1>this is a comment section</h1>
      <p>
        <ul>
          {something.map((ele) => {
            return <li key={ele}>{ele}</li>;
          })}
        </ul>
      </p>
    </>
  );
}
