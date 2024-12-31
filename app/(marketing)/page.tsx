import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Blogs from "@/components/sections/blogs";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import ProjectSection from "@/components/sections/projects";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <ProjectSection />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      <Features />
      <Blogs />
    </>
  );
}
