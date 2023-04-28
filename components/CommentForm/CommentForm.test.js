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
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

test("the detail view has a lit of comments for this are piece with the headline comments", () => {
  const dummyData = [{ text: "I am some text", date: "4/28/2023, 1:37:29 PM" }];
  render(<Comments allComments={dummyData} />);

  expect(screen.getByText("this is a comment section")).toBeInTheDocument();
});

test("each comment's text is visible", () => {
  const dummyData = [{ text: "I am some text", date: "4/28/2023, 1:37:29 PM" }];

  render(<Comments allComments={dummyData} />);
  expect(screen.getByText("I am some text")).toBeInTheDocument();
});

test("Each comment's date and time is displayed", () => {
  const date = new Date().toLocaleString();
  const dummyData = [
    {
      text: "I am some text",
      timestamp: Date.now(),
    },
  ];

  render(<Comments allComments={dummyData} />);
  expect(screen.getByText(date)).toBeInTheDocument();
});

test("[ ] The detail view has an input field to write a comment", () => {
  render(<CommentForm />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("The detail view has a submit button labeled send", () => {
  render(<CommentForm />);

  expect(screen.getByText("Submit your comment")).toBeInTheDocument();
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
