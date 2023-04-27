// Returns a form to writte comment and has onSubmitComent prop. It has to have a submit button

export function CommentForm(onSubmitComent) {
  return (
    <>
      <h3>Leave your comment here!</h3>
      <form>
        <label for="leave comment">Leave your comment here!</label>
        <p></p>
        <textarea
          id="leave comment"
          name="leave comment"
          placeholder="Write your comment here!"
          rows="10"
          cols="40"
        ></textarea>
        <p></p>
        <button type="submit">Submit your comment!</button>
      </form>
    </>
  );
}
