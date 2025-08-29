import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function AboutSlugPage() {
  return (
    <div>
      <HeroSection title="About Us" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <h1 className="text-2xl md:text-[40px] font-bold mb-8 md:mb-16">Leadership & Trustees</h1>
        <div className="mb-16">
          <h2 className="text-[20px] font-bold mb-5">Steering committee</h2>
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              The IEF is overseen by a steering committee (SC) that provides the vision and strategic direction of the IEF. It is the highest level of decision maker for the IEF. The SC members include 15 line-ministries - 1) Coordinating
              Ministry of Economic Affairs, 2) Ministry of Finance, 3) Ministry of Environment and Forestry, 4) Ministry of HomeAffairs, 5) Ministry of Energy and Mineral Resources, 6) Ministry of National Development Planning, 7) Ministry
              of Industry, 8) Ministry of Transportation, 9) Ministry of Marine and Fisheries, 10) Ministry of Agriculture.
            </p>
          </div>
        </div>
        <div className="mb-8 md:mb-16">
          <h2 className="text-[20px] font-bold mb-5">Advisory Group</h2>
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              The Advisory Group provides technical support to SC to enable the delivery of IEF Program, including the IBioFund. Members of the Advisory group can be donors contributing to the IBioFund and the representatives of the
              stakeholders that will benefit from IBioFund, which may include 1) community organizations and non-governmental organizations (including WCS), 2) University or research institutes, 3) Government agencies (local and national)
              that are not a SC member, 4) Minority groups (local and ad at communities, women, people with disabilities, youth, etc.), 5) Development partners and donors.
            </p>
          </div>
        </div>
        <div className="mb-8 md:mb-16">
          <h2 className="text-[20px] font-bold mb-5">Technical team</h2>
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              It will consist of experts that support the selection and execution of the IBioFund strategic investment plan, including the selection, monitoring and evaluation of projects. With its expertise, WCS can be part of this
              technical team for IBioFund.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
