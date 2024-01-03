import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";
import { getNonFeaturedPosts } from "@/service/posts";

// type Props = { posts: Post[] };
export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section>
      <h2 className="text-xl font-bold mt-5 mb-2">Carousel Posts</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
