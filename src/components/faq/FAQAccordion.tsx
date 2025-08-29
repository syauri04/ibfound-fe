"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "What is the IBioFund?",
    answer: "IBioFund is an innovative biodiversity trust fund to support sustainability in Indonesia.",
  },
  {
    question: "Why a IBioFund?",
    answer: "Because Indonesia is one of the world's megadiverse countries, requiring long-term funding for conservation.",
  },
  {
    question: "What is the Indonesia Environment Fund?",
    answer: "Because Indonesia is one of the world's megadiverse countries, requiring long-term funding for conservation.",
  },
  {
    question: "What will the IBioFund fund?",
    answer: "Because Indonesia is one of the world's megadiverse countries, requiring long-term funding for conservation.",
  },
  {
    question: "Who are the beneficiaries of the IBioFund?",
    answer: "Because Indonesia is one of the world's megadiverse countries, requiring long-term funding for conservation.",
  },
  {
    question: "How will the seed funding be used?",
    answer: "Because Indonesia is one of the world's megadiverse countries, requiring long-term funding for conservation.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between cursor-pointer items-center px-6 py-4 text-left font-bold  hover:text-[#3DBF19] text-lg md:text-xl ${openIndex === index ? "text-[#3DBF19]" : "text-black"}`}
          >
            {item.question}
            <Image src="/images/plus-icon.png" alt="Toggle Icon" width={20} height={20} className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`} />
          </button>
          <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] py-4" : "max-h-0"}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
