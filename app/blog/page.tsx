import { BlogPosts } from "@/app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

const Blog = () => {
  return (
    <section>
      <h1 className="mb-3 text-2xl font-semibold tracking-tighter">my blog</h1>
      <p className="mb-6">
        I write about product and tech things I find interesting.
      </p>
      <BlogPosts />
    </section>
  );
};

export default Blog;
