import BlogLoader from "./BlogLoader";
import useFetch from "./useFetch";

const BlogsPage = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {Array.isArray(blogs) && <BlogLoader blogs={blogs} />}
    </>
  );
};

export default BlogsPage;
