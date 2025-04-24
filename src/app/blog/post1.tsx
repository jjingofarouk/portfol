import Link from "next/link";

const BlogPost1 = () => {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Building Scalable Web Apps with Next.js
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        Published on April 1, 2025
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          This is the full content of the Next.js scalability post. It includes tips on server-side rendering, static site generation, and optimizing API routes.
        </p>
        <p>
          Next.js is a powerful framework for building scalable web applications. By leveraging features like Static Site Generation (SSG) and Server-Side Rendering (SSR), developers can create fast, SEO-friendly apps.
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

export default BlogPost1;