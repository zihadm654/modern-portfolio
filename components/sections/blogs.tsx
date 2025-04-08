import React from "react";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";

import MaxWidthWrapper from "../shared/max-width-wrapper";

const Blogs = () => {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <MaxWidthWrapper>
      <section className="py-8">
        <h2 className="font-heading mb-4 text-3xl">Blog Posts</h2>
        <div className="grid grid-cols-1 gap-4">
          {posts.slice(1).map(post => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              <h2 className="font-heading line-clamp-1 text-2xl">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-muted-foreground line-clamp-1">
                  {post.description}
                </p>
              )}
              {post.date && (
                <p className="text-muted-foreground text-sm">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Blogs;
