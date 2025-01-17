// textholder
import { useState, useEffect } from "react"; //insert ,useEffect into the dynamic curly braces
import BlogLoader from "./BlogLoader";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Couldn't fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLoader blogs={blogs} />}
    </>
  );
};

export default BlogsPage;
