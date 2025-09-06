"use client";

import { useState, useEffect } from "react";
import { type BlogPost } from "@/lib/blog-data";

interface BlogSectionProps {
  posts: BlogPost[];
  tags: string[];
}

export default function BlogSection({ posts, tags }: BlogSectionProps) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = selectedTag === "All" 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  // Conditional rendering for hydration
  if (!mounted) {
    return (
      <div className="mt-10 space-y-4">
        <div>
          <h2 className="text-lg font-medium">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  tag === "All"
                    ? "bg-gray-100 text-blue-600"
                    : "bg-white text-gray-900"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium">Posts</h2>
          <div className="space-y-8 mt-4">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors mb-2">
                  <a href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                <div className="text-sm text-gray-500">
                  {post.date} • {post.tags.join(", ")}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-4">
      {/* Tags Section */}
      <div>
        <h2 className="text-lg font-medium">Tags</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-gray-100 text-blue-600"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <h2 className="text-lg font-medium">Posts</h2>
        <div className="space-y-8 mt-4">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="group">
              <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors mb-2">
                <a href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </a>
              </h3>
              <div className="text-sm text-gray-500">
                {post.date} • {post.tags.join(", ")}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
