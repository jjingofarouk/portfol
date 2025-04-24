import Link from "next/link";

export default function BlogPost2() {
  return (
    <article className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Balancing Medicine and Tech: My Journey
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Published on March 15, 2025
      </p>
      <div className="mt-8 text-gray-800 dark:text-gray-200">
        <p>
          This post details my journey balancing medicine and tech, with insights
          from both fields.
        </p>
      </div>
      <Link href="/blog" className="mt-8 inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded">
        Back to Blog
      </Link>
    </article>
  );
}
