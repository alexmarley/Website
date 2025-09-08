import { getPostData, getAllPostSlugs } from "@/lib/blog-data";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          ← Back to Home
        </Link>
      </div>
      <article>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-8">
          {post.date} • {post.tags.join(", ")}
        </div>
        <div className="max-w-none">
          <div 
            className="space-y-4 text-lg leading-tight prose-p:leading-tight prose-p:mb-4"
            dangerouslySetInnerHTML={{ 
              __html: post.contentHtml || ''
            }}
          />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}
