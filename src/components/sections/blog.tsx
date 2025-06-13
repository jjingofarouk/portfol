"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { contentfulClient } from "@/lib/contentful";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog posts from Contentful
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "blogPost", // The ID of your "Blog Post" content type
          order: "-fields.publishedDate", // Sort by published date in descending order
        });

        const posts = response.items.map((item: any) => ({
          id: item.sys.id,
          title: item.fields.title,
          slug: item.fields.slug,
          excerpt: item.fields.excerpt,
          coverImage: item.fields.coverImage?.fields?.file?.url,
          publishedDate: item.fields.publishedDate,
        }));

        setBlogPosts(posts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            Blog
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore the latest insights, tutorials, and stories.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center col-span-full text-neutral-600 dark:text-neutral-300">
              Loading blog posts...
            </p>
          ) : blogPosts.length === 0 ? (
            <p className="text-center col-span-full text-neutral-600 dark:text-neutral-300">
              No blog posts available. Check back soon!
            </p>
          ) : (
            blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                aria-label={`Read blog post: ${post.title}`}
              >
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-focus:scale-105">
                  {post.coverImage && (
                    <img
                      src={`https:${post.coverImage}`}
                      alt={post.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="mt-4">
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