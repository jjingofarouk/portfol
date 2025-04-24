import Link from "next/link";

export default function BlogPost1() {
  return (
    <article className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Building Scalable Web Apps with Next.js
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Published on April 1, 2025
      </p>
      <div className="mt-8 text-gray-800 dark:text-gray-200">
        <p>
          This post covers tips for building scalable Next.js apps, including
          server-side rendering and static site generation.
        </p>
      </div>
      <Link href="/blog" className="mt-8 inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded">
        Back to Blog
      </Link>
    </article>
  );
}