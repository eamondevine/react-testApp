// textholder
import { useState, useEffect } from "react"; //insert ,useEffect into the dynamic curly braces
import BlogLoader from "./BlogLoader";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogLoader blogs={blogs} />}
    </>
  );
};

export default BlogsPage;
