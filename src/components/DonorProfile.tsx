"use client";

import Link from "next/link";
import Image from "next/image";

const donors = [
  { src: "/images/logo-bpdlh.png", alt: "BPDLH", slug: "bpdlh" },
  { src: "/images/logo-forestry.png", alt: "Ministry of Forestry", slug: "ministry-of-forestry" },
  { src: "/images/logo-wcs.png", alt: "WCS", slug: "wcs" },
  { src: "/images/logo-bpdlh.png", alt: "BPDLH", slug: "bpdlh-2" },
  { src: "/images/logo-forestry.png", alt: "Ministry of Forestry", slug: "ministry-of-forestry-2" },
  { src: "/images/logo-wcs.png", alt: "WCS", slug: "wcs-2" },
  { src: "/images/logo-bpdlh.png", alt: "BPDLH", slug: "bpdlh-3" },
  { src: "/images/logo-forestry.png", alt: "Ministry of Forestry", slug: "ministry-of-forestry-3" },
  { src: "/images/logo-wcs.png", alt: "WCS", slug: "wcs-3" },
];

export default function DonorProfile() {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className=" max-w-4xl xl:max-w-7xl mx-auto mb-10 md:mb-16 px-3 md:px-6 lg:px-0">
        <h2 className="text-2xl font-bold text-black">Donor Profile</h2>
      </div>
      <div className="container mx-auto">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-4 md:gap-8">
            {donors.map((donor, i) => (
              <Link key={i} href={`/donor/${donor.slug}`}>
                <div className="relative w-[auto] h-[64px] md:h-[104px] aspect-[3/1] cursor-pointer grayscale hover:grayscale-0 transition duration-300">
                  <Image src={donor.src} alt={donor.alt} fill className="object-contain" sizes="(max-width: 768px) 150px, 200px" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
