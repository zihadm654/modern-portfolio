import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/content/mdx-components";

import "@/styles/mdx.css";

import { Metadata } from "next";
import Link from "next/link";

import { BLOG_CATEGORIES } from "@/config/blog";
import { getTableOfContents } from "@/lib/toc";
import {
  cn,
  constructMetadata,
  formatDate,
  getBlurDataURL,
  placeholderBlurhash,
} from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Author from "@/components/content/author";
import BlurImage from "@/components/shared/blur-image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { DashboardTableOfContents } from "@/components/shared/toc";

// Updated type for Next.js 15
interface PostPageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: PostPageParams): Promise<Metadata | undefined> {
  const slug = (await params).slug;
  const post = allPosts.find(post => post.slugAsParams === slug);
  if (!post) {
    return;
  }

  const { title, description, image } = post;

  return constructMetadata({
    title: `${title} – Abdul Malek`,
    description: description,
    image,
  });
}

export default async function PostPage({ params }: PostPageParams) {
  const slug = (await params).slug;
  const post = allPosts.find(post => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  const defaultCategory = BLOG_CATEGORIES[0];
  const categorySlug =
    post.categories && post.categories.length > 0
      ? post.categories[0]
      : defaultCategory.slug;
  const category =
    BLOG_CATEGORIES.find(category => category.slug === categorySlug) ??
    defaultCategory;

  const relatedArticles = post.related
    ? post.related
        .map(slug => allPosts.find(post => post.slugAsParams === slug))
        .filter((post): post is NonNullable<typeof post> => post !== undefined)
    : [];

  const toc = await getTableOfContents(post.body.raw);

  const [thumbnailBlurhash, images] = await Promise.all([
    getBlurDataURL(post.image),
    await Promise.all(
      post.images.map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      })),
    ),
  ]);

  return (
    <>
      <MaxWidthWrapper className="pt-6 md:pt-10">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Link
              href={`/blog/category/${category.slug}`}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  rounded: "lg",
                }),
                "h-8",
              )}
            >
              {category.title}
            </Link>
            <time
              dateTime={post.date}
              className="text-muted-foreground text-sm font-medium"
            >
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-heading text-foreground text-3xl sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            {post.description}
          </p>
          <div className="flex flex-nowrap items-center space-x-5 pt-1 md:space-x-8">
            {post.authors.map(author => (
              <Author username={author} key={post._id + author} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="relative">
        <div className="absolute top-52 w-full border-t" />

        <MaxWidthWrapper className="grid grid-cols-4 gap-10 pt-8 max-md:px-0">
          <div className="bg-background relative col-span-4 mb-10 flex flex-col space-y-8 border-y md:rounded-xl md:border lg:col-span-3">
            <BlurImage
              alt={post.title}
              blurDataURL={thumbnailBlurhash ?? placeholderBlurhash}
              className="aspect-1200/630 border-b object-cover md:rounded-t-xl"
              width={1200}
              height={630}
              priority
              placeholder="blur"
              src={post.image}
              sizes="(max-width: 768px) 770px, 1000px"
            />
            <div className="px-[.8rem] pb-10 md:px-8">
              <Mdx code={post.body.code} images={images} />
            </div>
          </div>

          <div className="divide-muted sticky top-20 col-span-1 mt-52 hidden flex-col divide-y self-start pb-24 lg:flex">
            <DashboardTableOfContents toc={toc} />
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        {relatedArticles.length > 0 && (
          <div className="flex flex-col space-y-4 pb-16">
            <p className="font-heading text-foreground text-2xl">
              More Articles
            </p>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-6">
              {relatedArticles.map(post => (
                <Link
                  key={post.slugAsParams}
                  href={`/blog/${post.slugAsParams}`}
                  className="hover:bg-muted/80 flex flex-col space-y-2 rounded-xl border p-5 transition-colors duration-300"
                >
                  <h3 className="font-heading text-foreground text-xl">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 text-[15px]">
                    {post.description}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {formatDate(post.date)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </>
  );
}
