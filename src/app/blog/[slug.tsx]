import { GetStaticPaths, GetStaticProps } from "next";
  import { useRouter } from "next/router";
  import { cn } from "@/lib/utils";

  // Define BlogPost type (same as BlogSection)
  interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    createdAt: string;
    content?: string; // Optional for static content
  }

  // Static blog posts (same as BlogSection)
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Scalable Web Apps with Next.js",
      excerpt: "Learn how to structure and optimize your Next.js apps for performance and scalability.",
      slug: "/blog/nextjs-scalability",
      createdAt: "2025-04-01",
      content: "This is a placeholder for the full article about Next.js scalability. Add your content here.",
    },
    {
      id: "2",
      title: "Balancing Medicine and Tech: My Journey",
      excerpt: "A deep dive into my experiences as both a doctor and a web developer.",
      slug: "/blog/medicine-and-tech",
      createdAt: "2025-03-15",
      content: "This is a placeholder for the full article about balancing medicine and tech. Add your content here.",
    },
    {
      id: "3",
      title: "Optimizing React Apps for Performance",
      excerpt: "Techniques and best practices to make your React apps faster and more efficient.",
      slug: "/blog/react-performance",
      createdAt: "2025-02-20",
      content: "This is a placeholder for the full article about React performance. Add your content here.",
    },
  ];

  export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: blogPosts.map((post) => ({ params: { slug: post.slug.replace("/blog/", "") } })),
      fallback: false, // 404 for unknown slugs
    };
  };

  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = blogPosts.find((p) => p.slug === `/blog/${params?.slug}`);
    if (!post) {
      return { notFound: true };
    }
    return { props: { post } };
  };

  const BlogPostPage = ({ post }: { post: BlogPost }) => {
    const router = useRouter();

    if (router.isFallback) {
      return <div>Loading...</div>;
    }

    return (
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100 dark:bg-gray-900")}>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Published on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          {post.excerpt}
        </p>
        <div className="mt-6 prose dark:prose-invert max-w-none">
          <p>{post.content || "Full blog post content coming soon!"}</p>
        </div>
      </div>
    );
  };

  export default BlogPostPage;