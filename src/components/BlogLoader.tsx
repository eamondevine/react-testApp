import React from "react";

interface Blog {
  id: number;
  title: string;
  author: string;
  body: string;
}

interface BlogLoaderProps {
  blogs: Blog[] | null;
}

const BlogLoader: React.FC<BlogLoaderProps> = ({ blogs }) => {
  return (
    <>
      <div className="blogs-display text-center">
        <h1 className="font-effect-3d d-inline-block bg-light border border-dark rounded p-2">
          This is the Blogs Page
        </h1>
        <br />
      </div>

      {blogs?.map((blog) => (
        <div className="single-blog-preview p-2" key={blog.id}>
          <hr />
          <h2>
            <span className="italic">Title: </span>
            {blog.title}
          </h2>
          <h3>
            <span className="italic">Author: </span>
            {blog.author}
          </h3>
          <h3>
            <span className="italic">Blog: </span>
            {blog.body}
          </h3>
          <br />
          <hr />
          <br />
        </div>
      ))}
    </>
  );
};

export default BlogLoader;
