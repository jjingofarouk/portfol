"use client";

import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

// Define BlogPost type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
}

// Static blog posts (shared with [slug].tsx)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Apps with Next.js",
    excerpt: "Learn how to structure and optimize your Next.js apps for performance and scalability.",
    slug: "/blog/nextjs-scalability",
    createdAt: "2025-04-01",
  },
  {
    id: "2",
    title: "Balancing Medicine and Tech: My Journey",
    excerpt: "A deep dive into my experiences as both a doctor and a web developer.",
    slug: "/blog/medicine-and-tech",
    createdAt: "2025-03-15",
  },
  {
    id: "3",
    title: "Optimizing React Apps for Performance",
    excerpt: "Techniques and best practices to make your React apps faster and more efficient.",
    slug: "/blog/react-performance",
    createdAt: "2025-02-20",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="w-full py-16 sm:py-20 bg-gray-100 dark:bg-gray-900"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <Link href="#blog" aria-label="Blog Section">
            <BoxReveal width="100%">
              <h2
                id="blog-heading"
                className={cn(
                  "bg-clip-text text-3xl sm:text-4xl md:text-5xl text-transparent font-bold",
                  "bg-gradient-to-b from-black/80 to-black/50",
                  "dark:from-white/80 dark:to-white/20"
                )}
              >
                Blog
              </h2>
            </BoxReveal>
          </Link>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto">
            Insights, tutorials, and my personal journey in tech & medicine.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.length === 0 ? (
            <p className="text-center col-span-full text-neutral-600 dark:text-neutral-300">
              No blog posts available. Check back soon!
            </p>
          ) : (
            blogPosts.map((post) => (
              <Link
                key={post.id}
                href={post.slug}
                className="group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                aria-label={`Read blog post: ${post.title}`}
              >
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-focus:scale-105">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;