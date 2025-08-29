import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function ProgramHighlightsPage() {
  return (
    <div>
      <HeroSection title="Program Highlights" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <h1 className="text-2xl md:text-[40px] font-bold mb-4 md:mb-7">Women at the Forefront of Conservation</h1>
        <p className="font-inter leading-6 opacity-[0.4] mb-4 md:mb-7">By Taufik Abdullah</p>
        <div className="text-[20px] md:text-2xl font-inter leading-7 md:leading-8 text-[#0C5A3C] opacity-[0.8] italic mb-16">
          <p>
            Mrs Ros, or Bu Ros's story is not just a narration, but also an inspiration. A wildlife conservation saga. The world needs more people like Bu Ros, who, with her simplicity, has brought about many great changes. Her story
            teaches us that protecting nature is not only the responsibility of rangers, the government, scientists, or conservation and environmental activists, but the responsibility of all of us. We can contribute, starting from our own
            homes. From small steps, great changes can happen. What about us? What can we do to protect the nature around us?
          </p>
        </div>
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
        <div className="mb-16">
          <h2 className="text-[20px] font-bold mb-5">Advisory Group</h2>
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              The Advisory Group provides technical support to SC to enable the delivery of IEF Program, including the IBioFund. Members of the Advisory group can be donors contributing to the IBioFund and the representatives of the
              stakeholders that will benefit from IBioFund, which may include 1) community organizations and non-governmental organizations (including WCS), 2) University or research institutes, 3) Government agencies (local and national)
              that are not a SC member, 4) Minority groups (local and ad at communities, women, people with disabilities, youth, etc.), 5) Development partners and donors.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-[20px] font-bold mb-5">Technical team</h2>
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              It will consist of experts that support the selection and execution of the IBioFund strategic investment plan, including the selection, monitoring and evaluation of projects. With its expertise, WCS can be part of this
              technical team for IBioFund.
            </p>
          </div>
        </div>
      </section>

      <HaqSection title="Want to support IBioFund?" buttonText="Download Form" linkButton="#" />
    </div>
  );
}
