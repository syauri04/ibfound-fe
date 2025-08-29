import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <HeroSection title="About Us" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <div className="relative w-full mb-10 md:mb-20">
          <Image src="/images/aboutus-overview.jpg" alt="Overview Illustration" width={840} height={581} className="object-contain w-full h-auto" sizes="100vw" priority />
        </div>
        <h2 className="text-3xl md:text-[40px] font-bold mb-6 md:mb-12">Overview</h2>
        <div className="font-normal leading-6 opacity-[0.8] font-inter">
          <p>
            Indonesia, a "mega-biodiversity" country, plays a crucial role in global ecosystem stability due to its vast array of plant and animal life. This biodiversity provides essential services like resources, climate regulation,
            cultural value, and environmental support, forming the very foundation of life and human sustainability. It also contributes to education, research, recreation, and the economy.
            <br />
            <br />
            The Indonesian government is actively committed to biodiversity conservation and climate change control. They demonstrate this through various initiatives, including protecting endangered species, preserving genetic diversity,
            managing human-wildlife conflicts, promoting sustainable forest management, and implementing strategies like FoLU Netsink 2030. Indonesia also participates in major international conventions like UNCBD, UNFCCC, and CITES.
            <br />
            <br />
            Since 1993, Indonesia has had a biodiversity management action plan, with the latest being the IBSAP 2025–2045. This plan aims for sustainable biodiversity management until 2045, aligning with Indonesia's "Golden Indonesia 2045"
            vision, long-term development goals, and global commitments like the Kunming–Montreal Global Biodiversity Framework.
            <br />
            <br />
            The Ministry of Forestry, responsible for forestry affairs, ensures adequate and sustainable budget allocations from the State Budget for conservation. They're also developing new funding schemes from various legal sources. One
            significant development is the Indonesia Biodiversity Fund (IBioFund), managed by the Ministry of Finance's Environmental Fund Management Agency (BPDLH). IBioFund, officially launched on June 3, 2025, aims to solve the challenge
            of financing biodiversity conservation.
            <br />
            <br />
            IBioFund is a blended financing mechanism for biodiversity conservation. It pools funds from bilateral and multilateral collaborations, philanthropy, and private sources.
            <br />
            <br />
            These funds will be channeled to beneficiaries through grants and investments. The private sector's role extends beyond funding to include developing sustainable business practices and applying technology for wildlife monitoring
            and protection.
            <br />
            <br />
            Ultimately, conserving Indonesia's biodiversity requires strong collaboration among the government, private sector, and community groups. IBioFund is expected to be a catalyst for further innovative partnerships, bringing
            immense benefits to Indonesia's natural wealth.
          </p>
        </div>
      </section>

      <HaqSection title="Leadership & Trustees" buttonText="View" linkButton="/about/leadership-trustees" />
    </div>
  );
}
