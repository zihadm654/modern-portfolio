import React from "react";
import Link from "next/link";
import type { Metadata } from "next/types";

// import Testimonial from "../../src/layouts/Testimonial";

import IconCloud from "@/components/magicui/icon-cloud";
import Features from "@/components/sections/features";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

// import { fadeIn, stagger } from '../../utility/Animation';
const AboutPage = () => {
  return (
    <MaxWidthWrapper>
      <section className="">
        <div className="px-16 py-4 text-center">
          <h4 className="mb-3 pb-2 text-2xl font-semibold">
            A FEW WORDS ABOUT ME
          </h4>
          <p className="text-lg">
            I&apos;m Abdul Malek, a{" "}
            <span className="font-bold text-blue-500">
              Front-end-developer & UI/UX designer{" "}
            </span>{" "}
            who focuses on telling stories visually, through{" "}
            <span className="font-bold text-blue-400">minimalistic </span> and
            clear way. I design and develop{" "}
            <span className="font-bold text-blue-400">
              responsive websites{" "}
            </span>
            and functional user friendly interfaces. Over the past 3 years I
            have been working and as a rising startups around the world as a
            developer and designer, working solo. In my spare time I enjoy to
            see sunset and adventures.
          </p>
        </div>
        <div className="py-14 text-center">
          <h4 className="mb-3 pb-2 text-2xl font-semibold">Tech I use</h4>
          <IconCloud
            iconSlugs={[
              "nextdotjs",
              "react",
              "html5",
              "javascript",
              "typescript",
              "framer",
              "sass",
              "css3",
              "firebase",
              "github",
              "git",
              "greensock",
              "vercel",
              "visualstudiocode",
              "figma",
              "tailwindcss",
              "bootstrap",
              "prisma",
              "prettier",
              "mongodb",
            ]}
          />
        </div>
        <div className="mb-4 px-16 py-5 text-center">
          <h5 className="pb-4 text-2xl font-semibold">EXPERIENCE</h5>
          <h3 className="text-xl font-semibold">Over 3 years of experience</h3>
          <p>
            I&apos;ve been lucky enough to establish relationships with amazing
            clients from all over the world, ranging from individual clients,
            through up-and-coming startups, to multinational companies. For more
            details, head over to my{" "}
            <Link
              className="font-semibold underline"
              href={"https://www.linkedin.com/in/zihadm654"}
            >
              LinkedIn profile
            </Link>
            .
          </p>
        </div>
        <Features />
      </section>
    </MaxWidthWrapper>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: "About",
  description:
    "This about page holds all the necessary information about Abdul Malek",
};
