import Products from "@/components/sections/ProductsSection";
import SharedHero from "@/components/sections/SharedHero";

export const metadata = {
  title: "Products | Olympus Engineering Pvt. Ltd.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <SharedHero 
        title="Our Products" 
        bgImage="https://oeplind.com/wp-content/uploads/2025/04/service-oepl.jpg" 
      />
    <Products variant="product" />
    </main>
  );
}