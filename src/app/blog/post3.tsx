import Link from "next/link";

const BlogPost3 = () => {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Optimizing React Apps for Performance
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        Published on February 20, 2025
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Learn about memoization, lazy loading, and other techniques to boost React app performance.
        </p>
        <p>
          Optimizing React apps involves understanding the rendering lifecycle and using tools like React.memo and useCallback to minimize unnecessary re-renders.
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

export default BlogPost3;