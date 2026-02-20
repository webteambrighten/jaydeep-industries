import type { Metadata } from "next";
import PageHeroTitle from "@/components/page-hero-title";
import SuccessStoriesContent from "@/components/success-stories-content"; // We would create this

export const metadata: Metadata = {
  title: "Success Stories - Jaydeep Industries",
  description: "Recognizing two decades of excellence, quality, and international competitiveness in textile engineering.",
};

export default function SuccessStoriesPage() {
  return (
    <main>
      <PageHeroTitle
        title="Success Stories"
        description="Our commitment to quality and international competitiveness has been recognized by esteemed industry bodies over the years."
        themeColor="red" // Using red to distinguish it from the About page
      />

      <SuccessStoriesContent />
    </main>
  );
}