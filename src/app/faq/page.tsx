// app/faq/page.tsx
import FAQAccordion from "@/components/faq/FAQAccordion";
import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function FAQPage() {
  return (
    <div>
      <HeroSection title="FAQs" />

      <section className="max-w-4xl xl:max-w-7xl mx-auto px-3 md:px-6 lg:px-0 py-10 md:py-20">
        <h2 className="text-2xl md:text-[40px] font-bold mb-10 md:mb-16">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

      <HaqSection title="Have Any Questions?" buttonText="Contact Us" linkButton="/contact" />
    </div>
  );
}
