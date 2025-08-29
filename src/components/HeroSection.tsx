"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  imageUrl?: string;
}

export default function HeroSection({ title, imageUrl = "/images/picture2.png" }: HeroSectionProps) {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full mb-5">
      <Image src={imageUrl} alt={title} fill className="object-cover" priority />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-[32px] md:text-6xl font-bold">{title}</h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <Image src="/images/line_hero.png" alt="Decorative line" width={1600} height={100} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
