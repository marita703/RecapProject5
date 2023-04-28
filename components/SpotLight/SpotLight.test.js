import { render, screen } from "@testing-library/react";
import { SpotLight } from ".";
import React from "react";

test("The art piece image is displayed", () => {
  // mock object to inject instead of the randomObject
  const mockState = {
    imageSource: "https://placekitten.com/300/300",
    artist: "Midjourney AI",
  };
  // override the useState function to return the mock state
  const spy = jest
    .spyOn(React, "useState")
    .mockImplementation((state) => [mockState, jest.fn()]);

  render(<SpotLight />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  spy.mockReset();
  spy.mockRestore();
});

test("Artist is displayed", () => {
  const mockState = {
    imageSource: "https://placekitten.com/300/300",
    artist: "Midjourney AI",
  };
  const spy = jest
    .spyOn(React, "useState")
    .mockImplementation((state) => [mockState, jest.fn()]);

  render(<SpotLight />);
  const artistP = screen.getByText(/artist/);
  expect(artistP).toBeInTheDocument();
  expect(artistP).toHaveTextContent("Midjourney AI");

  spy.mockReset();
  spy.mockRestore();
});
