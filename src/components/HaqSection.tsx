"use client";

import Link from "next/link";

interface HaqSectionProps {
  title?: string;
  buttonText?: string;
  linkButton?: string;
}

export default function HaqSection({ title = "Have Any Questions?", buttonText = "Contact Us", linkButton = "/contact" }: HaqSectionProps) {
  return (
    <section className="max-w-4xl xl:max-w-7xl mx-auto px-3 md:px-6 lg:px-0 pb-10 md:pb-20">
      <div className="bg-[#0C5A3C] text-white rounded-[30px] leading-[120%] px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-24 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2">
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold md:max-w-[350px] lg:max-w-[500px]">{title}</h3>
        <Link href={linkButton} className="border border-[#3DBF19] px-6 py-2 rounded-[10px] text-2xl md:text-3xl lg:text-[32px] font-bold hover:bg-[#3DBF19] hover:text-white transition w-full md:w-auto text-center">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
