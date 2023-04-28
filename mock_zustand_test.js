import { create as actualCreate } from "zustand";
import { act, render, screen, waitFor } from "@testing-library/react";
import { useArtStore } from "./stores/artpieces";
import { fetchSomeData } from "./api";

const storeResetFn = new Set();

const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFn.add(() => store.setState(initialState, true));
  return store;
};

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

beforeEach(() => {
  act(() => {
    storeResetFn.forEach((resetFn) => resetFn());
  });
});

describe("zustand store", () => {
  test("renders a list", async () => {
    const setData = useArtStore((state) => state.setData);

    await fetchSomeData();

    setData(dummyData);

    // eslint-disable-next-line react/jsx-no-undef
    render(<ArtPieces />);

    const { getByText } = screen;
    await waitFor(() => getByText("Test data"));

    const ul = screen.getByRole("list");
    const lis = screen.getAllByRole("listitem");
    const images = screen.getAllByRole("img");

    expect(ul).toBeInTheDocument();
    expect(lis).toHaveLength(3);
    expect(images).toHaveLength(3);
  });
});
