import AboutContent from "@/components/sections/AboutContent";
import SharedHero from "@/components/sections/SharedHero";

export const metadata = {
  title: "About Us | Olympus Engineering Pvt. Ltd.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SharedHero  />
      <AboutContent/>
    </main>
  );
}