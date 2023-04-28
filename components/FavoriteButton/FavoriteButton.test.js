import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FavoriteButton } from ".";

test("renders a button", () => {
  const slug =
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg";
  const isFavorite = true;

  render(<FavoriteButton slug={slug} isFavorite={isFavorite} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
