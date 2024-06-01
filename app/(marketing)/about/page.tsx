import React from "react";
import Link from "next/link";
import type { Metadata } from "next/types";
// import Testimonial from "../../src/layouts/Testimonial";
import {
  SiCss3,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
} from "react-icons/si";

import Features from "@/components/sections/features";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

// import { fadeIn, stagger } from '../../utility/Animation';
const AboutPage = () => {
  return (
    <MaxWidthWrapper>
      <section className="about__page">
        <div className="py-4">
          <h4 className="mb-3 pb-2 text-center text-2xl font-semibold">
            A FEW WORDS ABOUT ME
          </h4>
          <p className="max-w-[70ch]">
            I&apos;m Abdul Malek, a{" "}
            <span className="text-blue-500">
              Front-end-developer & UI/UX designer{" "}
            </span>{" "}
            who focuses on telling stories visually, through{" "}
            <span className="text-blue-400">minimalistic </span> and clear way.
            I design and develop{" "}
            <span className="text-blue-400">responsive websites </span>and
            functional user friendly interfaces. Over the past 3 years I have
            been working and as a rising startups around the world as a
            developer and designer, working solo. In my spare time I enjoy to
            see sunset and adventures.
          </p>
        </div>
        <div className="mb-4 py-5">
          <h5 className="pb-4 text-center text-2xl font-semibold">
            EXPERIENCE
          </h5>
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
        <div className="py-5">
          <h4 className="mb-4 text-center text-2xl font-semibold">
            LANGUAGES & TOOLS I DO USE
          </h4>
          <div className="flex items-center justify-center gap-3 space-x-4 py-6">
            <SiNextdotjs className="size-8" />
            <SiReact className="size-8 text-blue-400" />
            <SiHtml5 className="size-8 text-orange-500" />
            <SiJavascript className="size-8 text-yellow-300" />
            <SiSass className="size-8 bg-pink-500" />
            <SiCss3 className="size-8 text-blue-600" />
            <SiGreensock className="size-8 text-green-500" />
            <SiFirebase className="size-8 bg-yellow-500" />
            <SiGithub className="size-8 " />
            <SiGit className="size-8 text-orange-500" />
          </div>
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
