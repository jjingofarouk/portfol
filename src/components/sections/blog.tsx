import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

// Dummy blog posts (replace with actual data)
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Apps with Next.js",
    excerpt: "Learn how to structure and optimize your Next.js apps for performance and scalability.",
    slug: "/blog/nextjs-scalability",
  },
  {
    id: 2,
    title: "Balancing Medicine and Tech: My Journey",
    excerpt: "A deep dive into my experiences as both a doctor and a web developer.",
    slug: "/blog/medicine-and-tech",
  },
  {
    id: 3,
    title: "Optimizing React Apps for Performance",
    excerpt: "Techniques and best practices to make your React apps faster and more efficient.",
    slug: "/blog/react-performance",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="w-full py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center">
          <Link href={"#blog"}>
            <BoxReveal width="100%">
              <h2
                className={cn(
                  "bg-clip-text text-4xl text-transparent md:text-7xl",
                  "bg-gradient-to-b from-black/80 to-black/50",
                  "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
                )}
              >
                BLOG
              </h2>
            </BoxReveal>
          </Link>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Insights, tutorials, and my personal journey in tech & medicine.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.slug} className="group">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;