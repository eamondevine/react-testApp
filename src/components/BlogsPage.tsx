// textholder
import { useState } from "react";
import BlogLoader from "./BlogLoader";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Pizza Bread",
      author: "Willem",
      body: "Pizza lorem ipsum ...",
      id: 1,
    },
    {
      title: "Cookies",
      author: "Eamon",
      body: "Cookies lorem ipsum ...",
      id: 2,
    },
    {
      title: "Waffles",
      author: "Marco",
      body: "Waffles lorem ipsum ...",
      id: 3,
    },
  ]);

  const handleDelete = (id: number) => {
    const afterDelete = blogs.filter((blog) => blog.id !== id);
    setBlogs(afterDelete);
  };

  const authorFilter = (author: string) => {
    const filterAuthor = blogs.filter((blog) => blog.author === author);
    setBlogs(filterAuthor);
  };

  return (
    <>
      <BlogLoader
        blogs={blogs}
        handleDelete={handleDelete}
        authorFilter={authorFilter}
      />
    </>
  );
};

export default BlogsPage;
