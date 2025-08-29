"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-3 md:px-6 text-white">
      <div className="bg-[#F7F7F7] rounded-[30px]">
        <div className="max-w-4xl xl:max-w-7xl mx-auto py-14 px-6 lg:px-0">
          <div>
            <Image src="/images/logo-ibfound.png" alt="IBioFund" width={270} height={64} />
            <p className="text-[32px] font-bold text-[#3DBF19] mt-2 leading-[120%]">Indonesia Biodiversity Fund</p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 md:gap-6 items-start mt-20">
            <div className="flex flex-col h-full">
              <div className="mt-auto flex flex-wrap gap-2 items-center">
                <Image src="/images/logo-forestry.png" alt="Forestry" width={169} height={64} />
                <Image src="/images/logo-bpdlh.png" alt="BPDLH" width={169} height={64} />
                <Image src="/images/logo-wcs.png" alt="WCS" width={169} height={64} />
              </div>
            </div>

            <div className="flex md:justify-end">
              <ul className="space-y-2 text-left text-[36px]  md:text-[40px] font-bold leading-[100%]">
                <li>
                  <Link href="/faq" className="text-black opacity-[0.2] hover:opacity-[1] transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black opacity-[0.2] hover:opacity-[1] transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-black opacity-[0.2] hover:opacity-[1] transition">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-black opacity-[0.2] hover:opacity-[1] transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-xs text-gray-400 my-4">© {new Date().getFullYear()} IBioFund. All rights reserved.</div>
    </footer>
  );
}
