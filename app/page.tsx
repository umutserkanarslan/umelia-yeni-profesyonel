import HeroBrand from "@/components/HeroBrand";
import ProductCards from "@/components/ProductCards";
import FooterMinimal from "@/components/FooterMinimal";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col w-full bg-navy">
      <HeroBrand />
      <ProductCards />
      <FooterMinimal />
    </main>
  );
}
