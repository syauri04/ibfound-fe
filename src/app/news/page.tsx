"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "Promoting Inclusive Financing for the Green Economy, UNDP Indonesia and BPDLH Develop De-risking Schemes, Sharia Revolving Funds, and Catalytic Financing",
    date: "02 June 2025",
    image: "/images/news1.png",
    category: "Events",
    slug: "inclusive-financing-green-economy",
  },
  {
    id: 2,
    title: "Minister of Forestry announces second phase of Community Fund for the Environment",
    date: "Wednesday, 19 February 2025 13:40 WIB",
    image: "/images/news2.png",
    category: "Insights",
    slug: "inclusive-financing-green-economy",
  },
  {
    id: 3,
    title: "Amplifying the voices of people close to the ground to create a sustainable future is more important than ever",
    date: "02 June 2025",
    image: "/images/news3.jpg",
    category: "Other",
    slug: "inclusive-financing-green-economy",
  },
  {
    id: 4,
    title: "Broad heart, boundless sincerity, and steadfastness in supporting a greater cause",
    date: "Wednesday, 19 February 2025 13:00 WIB",
    image: "/images/news4.jpg",
    category: "Events",
    slug: "inclusive-financing-green-economy",
  },
  {
    id: 5,
    title: "Conserving Indonesia’s biodiversity requires strong collaboration among the government, private sector, and community groups",
    date: "02 June 2025",
    image: "/images/news5.jpg",
    category: "Insights",
    slug: "inclusive-financing-green-economy",
  },
  {
    id: 6,
    title: 'Indonesia, a "mega-biodiversity" country, plays a crucial role in global ecosystem stability',
    date: "Wednesday, 19 February 2025 13:40 WIB",
    image: "/images/news6.jpg",
    category: "Other",
    slug: "inclusive-financing-green-economy",
  },
];

const categories = ["All", "Events", "Insights", "Other"];

export default function NewsPage() {
  const [selected, setSelected] = useState("All");

  const filteredNews = selected === "All" ? newsData : newsData.filter((n) => n.category === selected);

  return (
    <>
      <HeroSection title="News" />
      <section className="max-w-4xl xl:max-w-7xl mx-auto px-3 md:px-6 lg:px-0 pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-[40px] font-bold">Latest News</h2>
          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={clsx(
                  "px-4 py-1.5 rounded-full text-base md:text-[20px] font-inter border font-medium transition",
                  selected === cat ? "bg-[#3DBF19] text-white border-transparent" : "border-gray-300 text-gray-500 hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10 transition-all">
            {filteredNews.map((item) => (
              <Link key={item.id} href={`/news/${item.slug}`}>
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white rounded-[16px] overflow-hidden transition-all duration-300 mb-3 md:mb-10"
                >
                  <Image src={item.image} alt={item.title} width={620} height={412} className="w-full h-[160px] md:h-[412px] object-cover rounded-[10px] md:rounded-[30px]" />
                  <div className="py-4">
                    <h3 className="text-base md:text-[20px] font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-[12px] font-inter text-gray-500 ">{item.date}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination placeholder */}
        <div className="flex justify-start mb-20 gap-2">
          {[1, 2, 3, "...", 10].map((page, idx) => {
            const isActive = page === 1; // ganti jika pakai state currentPage

            return (
              <button
                key={idx}
                className={clsx(
                  "w-8 h-8 flex items-center justify-center text-base font-bold rounded-full border transition",
                  isActive ? "bg-[#3DBF19] text-white border-transparent" : "border-[#3DBF19] text-[#3DBF19] hover:bg-[#3DBF19]/10"
                )}
                disabled={page === "..."}
              >
                {page}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
