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
    <Card onClick={() => router.push(`/projects/${data.id}`)} key={data.id}>
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
            <Button variant={"outline"} className="mr-1">
              {i}
            </Button>
          ))}
        </p>
        <div className="flex w-full items-center justify-between  gap-2">
          <Link
            className="flex items-center justify-center space-x-2 py-1 underline"
            href={data.repo}
          >
            <Icons.gitHub className="size-6" />
            <span>Source Code</span>
          </Link>
          <Link
            className="flex items-center justify-center space-x-2 py-1 underline"
            href={data.site}
          >
            <Share />
            <span>Live site</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cards;
