import { render, screen } from "@testing-library/react";
import { Navigation } from ".";

test("Home link in Navigation is rendered", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", {
    name: /Home/i,
  });
  expect(link).toBeInTheDocument();
});

test("A navigation link labeled Gallery is displayed", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", {
    name: /Gallery/i,
  });
  expect(link).toBeInTheDocument();
});
