"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
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

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts from JSON file
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/data/blogs.json");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data: BlogPost[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Could not load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
          {loading ? (
            <p className="text-center col-span-full text-neutral-600 dark:text-neutral-300">
              Loading blog posts...
            </p>
          ) : error ? (
            <p className="text-center col-span-full text-red-600 dark:text-red-400">
              {error}
            </p>
          ) : posts.length === 0 ? (
            <p className="text-center col-span-full text-neutral-600 dark:text-neutral-300">
              No blog posts available. Check back soon!
            </p>
          ) : (
            posts.map((post) => (
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