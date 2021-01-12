import BlogCard from "../BlogCard/BlogCard";

const Blogs = ({ blogs, loadedBlogs }) => {
  return (
    <section className="blogs">
      {blogs && blogs.map((blog, i) => <BlogCard key={i} blog={blog} />)}
      {loadedBlogs &&
        loadedBlogs.map((blog, i) => <BlogCard key={i} blog={blog} />)}
    </section>
  );
};
export default Blogs;
