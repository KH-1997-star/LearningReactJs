import { useState } from "react";
import BlogList from "./blog_list";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new Website",
      body: "lorem ipsum....",
      author: "khairi",
      id: 1,
    },
    {
      title: "my new Website",
      body: "lorem ipsum....",
      author: "fayed",
      id: 2,
    },
    {
      title: "my new Website",
      body: "lorem ipsum....",
      author: "othman",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"ALL BLOGS"} />

      <BlogList
        blogs={blogs.filter((blog) => {
          if (blog.author === "khairi") {
            return blog;
          }
        })}
        title={"Khair's Blogs"}
      />
    </div>
  );
};

export default Home;
