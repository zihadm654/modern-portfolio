import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

import { FlipWords } from "../ui/flip-words";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        {/* Want animations? Check here: https://github.com/zihadm654/next-saas-stripe-starter/blob/76eb9f2b70b29c7a734ff0e5b047796ed2dac28d/app/(marketing)/page.tsx */}
        <Link
          href="https://twitter.com/zihadm654"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span>
          <span className="hidden md:flex">Introducing&nbsp;</span> Next Auth
          projects
          <Icons.twitter className="ml-2 size-3.5" />
        </Link>
        <h5>
          We Design & Develop{""}
          <span className="font-semibold">
            <FlipWords
              words={[
                "Web-Apps",
                "SAAS",
                "Web-Services",
                "Ecommerce-Website",
                "Landing-Page",
              ]}
            />
          </span>
        </h5>
        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Taking your{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            Vision
          </span>{" "}
          and serving it as a{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            Reality
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          We help brands in building beautiful websites, web apps and helping
          them carve their stories through engaging digital art experiences.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/book"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Book a Call</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href={"/contact"}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "px-5",
            )}
          >
            <p>
              <span className="font-semibold">Contact me</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
