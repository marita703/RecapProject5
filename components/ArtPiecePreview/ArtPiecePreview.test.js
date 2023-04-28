import { render, screen, waitFor } from "@testing-library/react";
import { ArtPiecePreview } from ".";

const dummyData = {
  name: "Maria del Mar",
  artist: "tori",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
};

test("renders an ArtPiecePreview Component, including an image, an artist, and a name of the artpiece", () => {
  render(
    <ArtPiecePreview
      name={dummyData.name}
      artist={dummyData.artist}
      imageSource={dummyData.imageSource}
    />
  );

  const nameOfArtPiece = screen.getByText(/maria del mar/i);
  const artistName = screen.getByText(/tori/i);
  const image = screen.getByRole("img", { alt: "Art piece image" });

  expect(image).toBeInTheDocument();
  expect(nameOfArtPiece).toBeInTheDocument();
  expect(artistName).toBeInTheDocument();
});

test("renders an image when rendering ArtPiecePreview", () => {
  render(
    <ArtPiecePreview
      name={dummyData.name}
      artist={dummyData.artist}
      imageSource={dummyData.imageSource}
    />
  );
  const image = screen.getByRole("img", { alt: "Art piece image" });

  expect(image).toBeInTheDocument();
});

test("renders an heading when rendering ArtPiecePreview", () => {
  render(
    <ArtPiecePreview
      name={dummyData.name}
      artist={dummyData.artist}
      imageSource={dummyData.imageSource}
    />
  );
  const nameOfArtPiece = screen.getByText(/maria del mar/i);
  expect(nameOfArtPiece).toBeInTheDocument();
});

test("renders an pTag when rendering ArtPiecePreview", () => {
  render(
    <ArtPiecePreview
      name={dummyData.name}
      artist={dummyData.artist}
      imageSource={dummyData.imageSource}
    />
  );
  const artistName = screen.getByText(/tori/i);
  expect(artistName).toBeInTheDocument();
});
