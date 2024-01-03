import PostsGrid from "@/components/PostsGrid";
import { promises as fsPromises } from "fs";
import path from "path";

// 포스트 메타 데이터 타입
export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

// 포스트 글 전문 타입
export type PostData = Post & { content: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  try {
    const fileContents: string = await fsPromises.readFile(filePath, "utf-8");
    const posts: Post[] = JSON.parse(fileContents);
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    console.error("Error reading file:", error);
    throw error; // Re-throw the error to handle it at a higher level
  }
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await fsPromises.readFile(filePath, "utf-8");
  return { ...metadata, content };
}
