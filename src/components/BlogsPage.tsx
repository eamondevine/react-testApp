// textholder
import { useState } from "react";
import BlogLoader from "./BlogLoader";

const BlogsPage = () => {
  const [blogs] = useState([
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

  return (
    <>
      <BlogLoader blogs={blogs} />
    </>
  );
};

export default BlogsPage;
