import BentoGrid from "@/components/sections/bentogrid";
import Blogs from "@/components/sections/blogs";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import Powered from "@/components/sections/powered";
import ProjectSection from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      {/* <Powered /> */}
      <ProjectSection />
      <BentoGrid />
      <Blogs />
      <Features />
      {/* <Testimonials /> */}
    </>
  );
}
