import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function InvestNowPage() {
  return (
    <div>
      <HeroSection title="Invest now" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <div className="mb-16">
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              WCS has secured seed funding from Liz Claiborne Art Ortenberg Foundation. In addition, with WCS’s internal funding, WCS is able to commit US$1 million to establish the IBioFund. WCS is also providing technical assistance,
              in-kind, to support the development of the IBioFund.
              <br />
              <br />
              IBioFund is held in a dedicated account in the Bank Rakyat Indonesia, a state owned bank in Indonesia. The US$1 million seed fund will be allocated as following (see Figure 1): 33% to support the establishment of IBioFund
              Management Unit operational cost and the formulation of IBioFund’s standard operational procedures. 27% to support pilot projects through a grant mechanism for proposal-based projects. 10% to support the pilot projects through
              a grant mechanism for immediate access projects. 20% to support pilot projects through an investment mechanism. 10% to support donor/investors engagement to grow the fund.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image src="/images/invest-now.png" alt="Flow Funding Mechanism" width={820} height={375} className="h-auto max-w-full" priority />
        </div>
      </section>

      <HaqSection title="Learn more" buttonText="More Info" linkButton="/invest/more-info" />
    </div>
  );
}
