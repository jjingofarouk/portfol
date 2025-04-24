import React from "react";
import Link from "next/link";

// Define BlogPost type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
}

// Static blog post data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Apps with Next.js",
    excerpt: "Learn how to structure and optimize your Next.js apps for performance and scalability.",
    href: "/blog/post1",
    date: "April 1, 2025",
  },
  {
    id: "2",
    title: "Balancing Medicine and Tech: My Journey",
    excerpt: "A deep dive into my experiences as both a doctor and a web developer.",
    href: "/blog/post2",
    date: "March 15, 2025",
  },
  {
    id: "3",
    title: "Optimizing React Apps for Performance",
    excerpt: "Techniques and best practices to make your React apps faster and more efficient.",
    href: "/blog/post3",
    date: "February 20, 2025",
  },
];

export default function Page() {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Blog
        </h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Published on {post.date}
              </p>
              <p className="mt-2 text-sm text-gray-900 dark:text-gray-200 line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className="mt-4 inline-block py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => console.log(`Navigating to ${post.href}`)}
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}