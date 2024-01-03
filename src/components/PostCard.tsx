import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden py-6 px-2">
        <Image
          className="rounded-md w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="pt-2 flex flex-col">
          <h3 className="text-lg">{title}</h3>
          <p className="w-full truncate">{description}</p>
          <span>{category}</span>
          <time className="self-end text-xs pt-2">{date.toString()}</time>
        </div>
      </article>
    </Link>
  );
}
