import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function FundingMechanismPage() {
  return (
    <div>
      <HeroSection title="Funding Mechanism" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <div className="mb-8 md:mb-16">
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              Proposal-based disbursement will be divided into two types: As grants - Objective: to support the improved management effectiveness of a protected area and regular biodiversity conservation activities.
              <br />
              <br />   As investment - Objective: to support the development of conservation-based businesses and generate a long-term return on investment to sustain the IBIOFUND.
              <br />
              <br />
              Immediate access grants: To support quick responses related to animal rescue as a result of human wildlife conflict incidence or illegal wildlife trade.
            </p>
          </div>
        </div>
        <div>
          <Image src="/images/detail-funding-mecahnism.png" alt="Flow Funding Mecahnism" width={820} height={375} className="object-contain w-full h-auto" sizes="100vw" priority />
        </div>
      </section>

      <HaqSection title="Submit your Proposal to Support IBioFund" buttonText="Apply now" linkButton="/program/funding-mechanism/apply-form" />
    </div>
  );
}
