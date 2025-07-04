// app/data/blogData.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
  content: string; // Full content of the blog post
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Apps with Next.js",
    excerpt: "Learn how to structure and optimize your Next.js apps for performance and scalability.",
    slug: "/blog/nextjs-scalability",
    createdAt: "2025-04-01",
    content: `
      # Building Scalable Web Apps with Next.js

      Next.js is a powerful framework for building scalable web applications. In this post, we explore key strategies to optimize your Next.js apps, including:

      - **Server-Side Rendering (SSR)**: Improve initial page load times by rendering pages on the server.
      - **Static Site Generation (SSG)**: Pre-render pages at build time for lightning-fast performance.
      - **API Routes**: Build lightweight APIs within your Next.js app.
      - **Optimizing Images**: Use Next.js's built-in \\`Image\\` component to serve optimized images.

      By leveraging these features, you can ensure your app scales efficiently while maintaining a great user experience.
    `,
  },
  {
    id: "2",
    title: "Balancing Medicine and Tech: My Journey",
    excerpt: "A deep dive into my experiences as both a doctor and a web developer.",
    slug: "/blog/medicine-and-tech",
    createdAt: "2025-03-15",
    content: `
      # Balancing Medicine and Tech: My Journey

      As a doctor and a web developer, I’ve learned to navigate two seemingly different worlds. This post covers:

      - **Time Management**: How I juggle medical practice with coding projects.
      - **Skill Synergies**: Applying problem-solving from medicine to software development.
      - **Lessons Learned**: The importance of empathy and precision in both fields.

      My journey highlights how diverse skill sets can complement each other and open unique opportunities.
    `,
  },
  {
    id: "3",
    title: "Optimizing React Apps for Performance",
    excerpt: "Techniques and best practices to make your React apps faster and more efficient.",
    slug: "/blog/react-performance",
    createdAt: "2025-02-20",
    content: `
      # Optimizing React Apps for Performance

      Performance is critical for user satisfaction. In this post, we discuss:

      - **Memoization**: Using \\`React.memo\\` and \\`useMemo\\` to prevent unnecessary renders.
      - **Lazy Loading**: Implementing dynamic imports to reduce initial bundle size.
      - **Code Splitting**: Breaking your app into smaller chunks for faster loading.
      - **Profiling**: Using React Developer Tools to identify bottlenecks.

      These techniques can significantly improve your app’s responsiveness and scalability.
    `,
  },
  {
    id: "4",
    title: "Introduction to TypeScript in Web Development",
    excerpt: "Discover how TypeScript can enhance your JavaScript projects with type safety.",
    slug: "/blog/typescript-intro",
    createdAt: "2025-01-10",
    content: `
      # Introduction to TypeScript in Web Development

      TypeScript adds type safety to JavaScript, making it easier to build robust applications. This post covers:

      - **Why TypeScript?**: Benefits like catching errors at compile time.
      - **Basic Types**: Setting up interfaces and types for your data.
      - **Integration with React**: Using TypeScript with React components.
      - **Best Practices**: Tips for writing clean TypeScript code.

      TypeScript is a game-changer for developers looking to improve code quality.
    `,
  },
  {
    id: "5",
    title: "The Future of Web Accessibility",
    excerpt: "Why accessibility matters and how to make your web apps inclusive.",
    slug: "/blog/web-accessibility",
    createdAt: "2024-12-05",
    content: `
      # The Future of Web Accessibility

      Accessibility ensures everyone can use your web app. In this post, we explore:

      - **WCAG Guidelines**: Understanding Web Content Accessibility Guidelines.
      - **Semantic HTML**: Using proper tags to improve screen reader support.
      - **ARIA Attributes**: Enhancing interactivity for assistive technologies.
      - **Testing Tools**: Using tools like Lighthouse to audit accessibility.

      Building accessible apps is not just ethical—it’s essential for reaching a wider audience.
    `,
  },
];