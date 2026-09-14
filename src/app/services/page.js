import SharedHero from "@/components/sections/SharedHero";
import Services from "@/components/sections/ServicesSection"; // Path apne project ke mutabik check kar lein

export const metadata = {
  title: "Services | Olympus Engineering Pvt. Ltd.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Shared Hero Section */}
      <SharedHero title="Our Services" 
         bgImage="https://oeplind.com/wp-content/uploads/2025/04/13.png"
      />
      
      {/* Service Section Component with product-page layout variant */}
      <Services variant="service" />
    </main>
  );
}