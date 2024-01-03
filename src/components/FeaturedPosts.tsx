import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="text-xl font-bold mt-3 mb-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
