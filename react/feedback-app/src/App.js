function App() {
  const title = "The newest of new";
  const paragraph = "Checkout all the latest stuff";
  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
    { id: 4, text: "Comment Four" },
    { id: 5, text: "Comment Five" },
    { id: 6, text: "Comment Six" },
  ];

  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <p>{paragraph}</p>

      {showComments && commentBlock}
    </>
  );
}

export default App;
