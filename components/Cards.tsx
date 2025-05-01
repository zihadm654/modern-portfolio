"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";
import { Share } from "lucide-react";

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

import BlurImage from "./shared/blur-image";

interface IData {
  data: Project;
}

const Cards: React.FC<IData> = ({ data }) => {
  const router = useRouter();
  if (!data) return null;
  return (
    <Card
      className="p-4 hover:cursor-pointer"
      onClick={() => router.push(`/projects/${data.id}`)}
      key={data.id}
    >
      <CardContent>
        {data?.image && (
          <BlurImage
            src={data.image}
            height={600}
            width={400}
            alt={data.title}
            placeholder="blur"
            blurDataURL={data.image}
            className="aspect-video w-full rounded-md object-cover"
          />
        )}
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-start justify-between gap-2">
        <p>
          {data.role?.map(i => (
            <Button key={i} variant={"outline"} className="mr-1">
              {i}
            </Button>
          ))}
        </p>
        <div className="border-muted flex w-full items-center justify-between gap-2 border-t">
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
