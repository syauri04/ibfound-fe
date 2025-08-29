import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function InvestNowPage() {
  const images = ["/images/galleryinfo1.jpg", "/images/galleryinfo2.jpg", "/images/galleryinfo3.jpg", "/images/galleryinfo4.jpg"];
  return (
    <div>
      <HeroSection title="More info" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <div className="mb-8 md:mb-16">
          <div className=" leading-6 font-inter">
            <div className="font-bold">Dr. Noviar Andayani</div>
            <div className="font-normal opacity-[0.8]">Country Director, WCS Indonesia Program</div>
            <div className="font-normal text-[#3DBF19] underline">nandayani@wcs.org</div>
          </div>
          <br />
          <br />
          <div className=" leading-6 font-inter">
            <div className="font-bold">Peter Clyne</div>
            <div className="font-normal opacity-[0.8]">WCS Interim Regional Director for Southeast Asian Archipelago Program</div>
            <div className="font-normal text-[#3DBF19] underline">pclyne@wcs.org</div>
          </div>
          <br />
          <br />
          <div className=" leading-6 font-inter">
            <div className="font-bold">Jeni Pareira</div>
            <div className="font-normal opacity-[0.8]">Forest and Climate Senior Advisor, WCS Indonesia Program</div>
            <div className="font-normal text-[#3DBF19] underline">jpareira@wcs.org</div>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-4 pb-10 md:pb-20 pt-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-[10px]">
              <Image src={src} alt={`Gallery ${index + 1}`} width={300} height={200} className="object-cover w-full h-full rounded-[10px]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
