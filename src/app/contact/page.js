import SharedHero from "@/components/sections/SharedHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Olympus Engineering Pvt. Ltd.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Banner */}
      <SharedHero title="Contact Us" showTitle={true} height="h-[600px]" bgImage={"Images/CONTACT-US.webp"} />
      
      <ContactSection />
    </main>
  );
}