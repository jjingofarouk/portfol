"use client";

import Link from "next/link";
import React from "react";

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

export default page = () => {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Blog</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {blogPosts.map((post) => (
          <li
            key={post.id}
            className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="p-4 text-zinc-300">
              <h2 className="text-xl">{post.title}</h2>
              <p className="mt-2 text-xs text-zinc-500">{post.date}</p>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-4">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <Link href={post.href} onClick={() => console.log(`Navigating to ${post.href}`)}>
                  <span className="text-blue-400 hover:underline">
                    Read More →
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}