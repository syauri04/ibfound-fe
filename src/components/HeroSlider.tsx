"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css/navigation";
import "swiper/css/effect-fade";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Bisa campur image & video
const slides = [
  { type: "video", src: "/videohero.mp4" },
  { type: "image", src: "/images/picture1.png" },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[560px] md:h-screen">
      <Swiper navigation loop effect="fade" speed={1000} fadeEffect={{ crossFade: true }} modules={[Navigation, EffectFade]} className="h-[560px] md:h-full" onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background (image / video) */}
            <motion.div key={activeIndex} variants={imageVariants} initial="hidden" animate="visible" transition={{ duration: 1, ease: "easeOut" }} className="absolute inset-0 z-0">
              {slide.type === "image" ? (
                <Image src={slide.src} alt={`slide-${index}`} fill className="object-cover" priority />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onLoadedMetadata={(e) => {
                    const vid = e.currentTarget;
                    vid.muted = true;
                    vid.play().catch(() => {
                      console.log("Autoplay blocked, video will wait for interaction");
                    });
                  }}
                />
              )}
            </motion.div>

            {/* Text overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center px-4 z-10">
              <motion.div key={`text-${activeIndex}`} initial="hidden" animate="visible" variants={textVariants} transition={{ duration: 0.8, ease: "easeOut" }}>
                <p className="text-[14px] md:text-xl font-bold mb-3">Indonesia Biodiversity Fund</p>
                <h1 className="text-6xl text-[40px] md:text-[80px] font-bold leading-[100%]">
                  Sustainability <br />
                  <span className="italic font-inter font-normal">in</span> Biodiversity
                </h1>
              </motion.div>
            </div>

            {/* Decorative line image at bottom */}
            <div className="absolute bottom-0 left-0 w-full z-20">
              <Image src="/images/line_hero.png" alt="line effect" width={1600} height={100} className="w-full h-auto pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
