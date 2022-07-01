import { useState } from "react";
const BlogList = (props) => {
  const handelDelete = (id) => {
    blogs.filter((blog) => {
      if (blog.id != id) {
        return blog;
      }
    });
  };
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className="blog-list">
      <p className="blog-title"> {title}</p>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>
            {blog.title}
            <p>Written by {blog.author}</p>
          </h2>
          <button onClick={() => handelDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
