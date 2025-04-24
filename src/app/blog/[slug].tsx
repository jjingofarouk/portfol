"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

// Define BlogPost type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
  content: string;
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(`Fetching blogs.json for slug: ${params.slug}`);
        const response = await fetch("/data/blogs.json");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const posts: BlogPost[] = await response.json();
        const foundPost = posts.find((p) => p.slug === params.slug);
        if (!foundPost) {
          console.log(`Post not found for slug: ${params.slug}`);
          notFound();
        }
        console.log(`Found post: ${foundPost.title}`);
        setPost(foundPost);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          Loading blog post...
        </p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-600 dark:text-red-400">
          {error || "Blog post not found."}
        </p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {post.title}
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        Published on {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <button
        onClick={() => router.back()}
        className="mt-8 px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        Back to Blog
      </button>
    </article>
  );
};

export default BlogPostPage;