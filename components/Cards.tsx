"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Projects } from "@prisma/client";
import { Share } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/shared/icons";

interface IData {
  data: Projects;
}

const Cards: React.FC<IData> = ({ data }) => {
  const router = useRouter();
  if (!data) return null;
  return (
    <Card
      className="hover:cursor-pointer"
      onClick={() => router.push(`/projects/${data.id}`)}
      key={data.id}
    >
      <CardContent>
        {data.img && (
          <AspectRatio className="overflow-hidden" ratio={16 / 9}>
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
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-start justify-between gap-2">
        <p>
          {data.role?.map((i) => (
            <Button key={i} variant={"outline"} className="mr-1">
              {i}
            </Button>
          ))}
        </p>
        <div
          className="flex w-full items-center justify-between  gap-2 border-t
border-muted"
        >
          <div className="-mb-5 flex gap-3 py-4 md:-mb-7">
            <Button variant="secondary" size="sm" rounded="xl" className="px-4">
              <Link
                target="_blank"
                rel="noreferrer"
                href={data.repo}
                className="flex items-center gap-2"
              >
                <span>Source code</span>
                <Icons.gitHub className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="-mb-5 flex gap-3 py-4 md:-mb-7">
            <Button variant="secondary" size="sm" rounded="xl" className="px-4">
              <Link
                href={data.site}
                className="flex items-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit the site</span>
                <Icons.arrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cards;
