import { fetchSomeData } from "./api";
import { render, screen, waitFor } from "@testing-library/react";
import { ArtPieces } from ".";
import { useArtStore } from "../../stores/artpieces";

jest.mock("./api", () => ({
  fetchSomeData: jest.fn(() =>
    Promise.resolve({
      data: {
        id: 1,
        name: "Test data",
      },
    })
  ),
}));

const dummyData = [
  {
    name: "Maria del Mar",
    artist: "maria del Mar",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    name: "Tori",
    artist: "maria del Mar",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    name: "Ekatherina",
    artist: "maria del Mar",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

test("renders a list", async () => {
  const setData = useArtStore.getArtPieces().setData;

  await fetchSomeData();

  setData(dummyData);

  render(<ArtPieces />);

  const { getByText } = screen;
  await waitFor(() => getByText("Test data"));

  const ul = screen.getByRole("list");
  const lis = screen.getAllByRole("listitem");
  const images = screen.getAllByRole("img");

  expect(ul).toBeInTheDocument();
  expect(lis).toHaveLength(11);
  expect(images).toHaveLength(11);
});

test("renders an image in each artpieces", () => {});

test("renders a tite in each artpiece", () => {});

test("renders an artist in each artpiece", () => {});
