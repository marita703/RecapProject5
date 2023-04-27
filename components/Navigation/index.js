// needs to render navigation links: spotlight, favPieces, preview

import Link from "next/link";
import { useArtStore } from "../../stores/artpieces";
import { BrowseRouter, Routes, Route } from "react-router-dom";
import Favourites from "./../../pages";
import HomePage from "./../../pages";
import preview from "./../../pages";

export function Navigation() {
  return (
    <>
      <h2>i am navigation</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/favourites">Favourites</Link>
        </li>
        <li>
          <Link href="/pages/preview">Preview</Link>
        </li>
      </ul>
    </>
  );
}
