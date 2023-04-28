// Returns a form to writte comment and has onSubmitComent prop. It has to have a submit button

export function CommentForm({ handleSubmit }) {
  return (
    <>
      <h3>Leave your comment here!</h3>
      <form onSubmit={handleSubmit}>
        <label name="leavecomment">Leave your comment here!</label>
        <p></p>
        <textarea
          id="leavecomment"
          name="leavecomment"
          placeholder="Write your comment here!"
          rows="10"
          cols="40"
        ></textarea>
        <p></p>
        <button type="submit">Submit your comment!</button>
      </form>
      ;
    </>
  );
}
