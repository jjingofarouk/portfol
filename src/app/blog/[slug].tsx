import { contentfulClient } from "@/contentful";

export const getStaticPaths = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "blogPost",
  });

  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const response = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  const post = response.items[0];

  return {
    props: {
      post: {
        title: post.fields.title,
        content: post.fields.content,
        coverImage: post.fields.coverImage?.fields?.file?.url || null,
        publishedDate: post.fields.publishedDate,
      },
    },
  };
};

const BlogPostPage = ({ post }: any) => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-bold">{post.title}</h1>
    <p className="text-gray-500 mt-4">{new Date(post.publishedDate).toDateString()}</p>
    {post.coverImage && (
      <img
        src={`https:${post.coverImage}`}
        alt={post.title}
        className="mt-8 rounded-lg"
      />
    )}
    <div className="prose mt-8">{post.content}</div>
  </div>
);

export default BlogPostPage;