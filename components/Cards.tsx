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

const Cards = ({ data }: { data: Projects[] }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-3 py-4 max-md:grid-cols-1">
      {data?.map((item: Projects) => (
        <Card onClick={() => router.push(`/projects/${item.id}`)} key={item.id}>
          <CardContent>
            {item.img && (
              <AspectRatio className="overflow-hidden" ratio={16 / 9}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  blurDataURL={item.img}
                />
              </AspectRatio>
            )}
          </CardContent>
          <CardHeader>
            <CardTitle className="text-2xl">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col items-start justify-between gap-2">
            <p>
              {item.role?.map((i) => (
                <Button variant={"outline"} className="mr-1">
                  {i}
                </Button>
              ))}
            </p>
            <div className="flex w-full items-center justify-between  gap-2">
              <Link
                className="flex items-center justify-center space-x-2 py-1 underline"
                href={item.repo}
              >
                <Icons.gitHub className="size-6" />
                <span>Source Code</span>
              </Link>
              <Link
                className="flex items-center justify-center space-x-2 py-1 underline"
                href={item.site}
              >
                <Share />
                <span>Live site</span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
