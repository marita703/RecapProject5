/*comments - Tori
[ ] The detail view has a list of comments for this art piece with the headline "Comments" 🖼️
[ ] Each comment's text is displayed 🖼️
[ ] Each comment's date and time is displayed 🖼️
[ ] The detail view has an input field to write a comment 🖼️
[ ] The detail view has a submit button labeled "Send" 🖼️
[ ] After submitting the form, the comment is appended to the list of comments 🖼️*/

//import { userEvent } from "@testing-library/user-event/dist/types/setup";
import { CommentForm } from ".";
import { Comments } from "./../Comments/index";
import { ArtPieceDetails } from "./../ArtPieceDetails/";

import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

// test("the detail view has a lit of comments for this are piece with the headline comments", () => {});

test("each comment's text is visible", () => {
  const dummyData = ["comment 1", "another comment"];

  render(<Comments allComments={dummyData} />);
  expect(screen.getByText("comment 1")).toBeInTheDocument();
});

test("Each comment's date and time is displayed", () => {});

test("[ ] The detail view has an input field to write a comment ", () => {});

test("The detail view has a submit button labeled send", () => {
  render(<CommentForm />);

  expect(screen.getByText("Submit your comment!")).toBeInTheDocument();
});

test("[ ] After submitting the form, the comment is appended to the list of comments", async () => {
  const onSubmit = jest.fn();
  const user = userEvent.setup();

  render(<CommentForm handleSubmit={onSubmit} />);
  const comment = screen.getByPlaceholderText("Write your comment here!");
  const button = screen.getByRole("button");

  await user.type(comment, "This is a comment");
  await user.click(button);

  expect(onSubmit).toHaveBeenCalledWith({ comment: "This is a comment" });
});
