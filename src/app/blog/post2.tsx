import Link from "next/link";

const BlogPost2 = () => {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Balancing Medicine and Tech: My Journey
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        Published on March 15, 2025
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          This post details my journey balancing medicine and tech, including challenges and insights from both fields.
        </p>
        <p>
          As a medical doctor and web developer, I've learned to apply analytical thinking from medicine to solve complex technical problems, creating impactful solutions.
        </p>
        {/* Add more content as needed */}
      </div>
      <Link
        href="/#blog"
        className="mt-8 inline-block px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        Back to Blog
      </Link>
    </article>
  );
};

export default BlogPost2;