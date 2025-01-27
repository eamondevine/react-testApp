import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { title, author, body };
    setPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setPending(false);
      setTimeout(() => {
        useNavigate("/");
      });
    });
  };

  return (
    <div className="create-blog">
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <br />
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label>Enter your blog title:</label>
        <br />
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Type your blog content here!</label>
        <br />
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <p>{author}</p>
        <p>{title}</p>
        <p>{body}</p>
        {!pending && <button className="round-butt">Submit</button>}
        {pending && (
          <button disabled className="round-butt">
            Submitting...
          </button>
        )}
      </form>
    </div>
  );
};

export default NewBlog;
