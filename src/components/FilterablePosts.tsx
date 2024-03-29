"use client";
import { Post } from "@/service/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <PostsGrid posts={filtered} />
    </section>
  );
}
