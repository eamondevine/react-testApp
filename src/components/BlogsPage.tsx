// textholder
import { useState, useEffect } from "react"; //insert ,useEffect into the dynamic curly braces
import BlogLoader from "./BlogLoader";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return <>{blogs && <BlogLoader blogs={blogs} />}</>;
};

export default BlogsPage;
