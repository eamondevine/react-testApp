import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

//Object shape defined for typescript
interface Blog {
  id: number;
  title: string;
  body: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch<Blog>(`http://localhost:8000/blogs/${id}`); //Reference to Blog object for typescript
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details d-flex justify-content-center">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>~Here's a specific blog for ya~</h2>
          <br />
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={handleClick} className="round-butt">
            DELETE
          </button>
        </article>
      )}
    </div>
  );
  console.log(id);
};

export default BlogDetails;
