import HeroSlider from "@/components/HeroSlider";
import SupportSection from "@/components/SupportSection";
import CardGrid from "@/components/CardGrid";
import DonorProfile from "@/components/DonorProfile";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <SupportSection />
      <CardGrid />
      <DonorProfile />
    </main>
  );
}
