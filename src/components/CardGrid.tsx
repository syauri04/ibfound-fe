"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Program Highlights",
    img: "/images/ProgramHighlights.jpg",
    links: "/program/program-highlights",
  },
  {
    title: "Funding Mechanism",
    img: "/images/FundingMechanism.jpg",
    links: "/program/funding-mechanism",
  },
  {
    title: "Recipient Profile",
    img: "/images/RecipientProfile.jpg",
    links: "/program/recipient-profile",
  },
];

export default function CardGrid() {
  return (
    <motion.section
      className="max-w-4xl xl:max-w-7xl mx-auto pt-0 md:pt-[100px] pb-0 md:pb-14 px-3 md:px-6 lg:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="grid gap-6 xl:gap-10 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Link href={card.links} key={index}>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image src={card.img} alt={card.title} width={400} height={560} className="object-cover w-full h-[160px] sm:h-[350px] lg:h-[560px] group-hover:scale-105 transition-transform duration-300" />

              {/* Overlay Title */}
              <div
                className="
        absolute inset-0
        flex items-center justify-center
        bg-gradient-to-t from-black/80 via-black/50 to-transparent
        p-8
        lg:items-end lg:justify-start lg:bg-gradient-to-t
        lg:from-black/80 lg:via-black/50 lg:to-transparent
      "
              >
                <span
                  className="
          text-white text-2xl sm:text-[38px] lg:text-[40px]
          hover:text-[#3DBF19] hover:underline-offset-auto
          transition font-bold leading-[120%] underline
          text-center lg:text-left pr-0 lg:pr-8
        "
                >
                  {card.title}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
