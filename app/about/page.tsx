import type { Metadata } from "next";
import PageHeroTitle from "@/components/page-hero-title";
import ProfessionalAbout from "@/components/professional-about";

export const metadata: Metadata = {
  title: "About Us - Jaydeep Industries",
  description:
    "Learn about Jaydeep Industries' legacy, journey, vision, and mission in the textile weaving industry.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeroTitle
        title="Jaydeep Industries"
        description="Discover our legacy, manufacturing excellence, and commitment to precision engineering in the textile weaving industry."
        themeColor="black"
      />

      {/* Founder, Phases, Team, Vision & Certifications */}
      <ProfessionalAbout />
    </main>
  );
}
