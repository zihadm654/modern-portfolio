import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/actions/getProjects";
import { SiGithub } from "react-icons/si";
import { VscLiveShare } from "react-icons/vsc";

import { formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await getProject(slug);
  console.log(data, "data");
  if (!data) return <div>Not found</div>;
  return (
    <MaxWidthWrapper>
      <section className="py-4">
        {data.img && (
          <AspectRatio ratio={16 / 9}>
            <Image
              src={data.img}
              alt={data.title}
              fill
              placeholder="blur"
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
              blurDataURL={data.img}
            />
          </AspectRatio>
        )}
        <div className="flex items-center justify-between gap-3">
          <div className="mt-4 py-4">
            <div className="pb-2">
              <h3 className="text-2xl font-semibold">{data.title}</h3>
              <h5 className="font-semibold text-gray-600">
                {formatDate(data.createdAt.toISOString())}
              </h5>
            </div>
            <div className="py-3">
              <p>{data.description}</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <h5 className="py-3">Roles Played: </h5>
              <p>
                {data.role?.map((i) => (
                  <Button key={i} variant={"outline"} className="mr-1">
                    {i}
                  </Button>
                ))}
              </p>
            </div>
            <div className="flex items-center justify-start gap-5">
              <h5 className="py-3">Client: </h5>
              <p>{data.client}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center justify-start gap-3">
                <h5 className="py-3">Souce code: </h5>
                <Link className="font-bold underline" href={data.repo}>
                  Github Repo
                </Link>
              </div>
              <div className="flex items-center justify-start gap-3">
                <h5 className="py-3">Live site: </h5>
                <Link className="font-bold underline" href={data.site}>
                  Site link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const { slug } = params;
  const product = await getProject(slug);
  console.log(product, "product");
  if (!product) return { title: "Not found" };
  // optionally access and extend (rather than replace) parent metadata
  return {
    title: product.title,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.img!,
          width: "600",
          height: "400",
          alt: product.title,
        },
        {
          url: product.img!,
          width: "800",
          height: "600",
          alt: product.title,
        },
      ],
    },
  };
}
