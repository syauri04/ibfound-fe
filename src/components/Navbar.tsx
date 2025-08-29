"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"en" | "id">("en");
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = (value: "en" | "id") => {
    setLang(value);
    setOpen(false);
  };

  return (
    <header className="fixed top-2 w-full z-40 px-3 md:px-6 lg:px-0">
      {/* Language selector - Desktop */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md">
            <Image src={`/images/flag_${lang}.png`} alt="flag" width={40} height={30} />
            <Image src="/images/Polygon.png" alt="dropdown" width={12} height={8} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-[201px]">
              <div className="bg-gray-100 rounded-[20px] shadow-md overflow-hidden transition-all duration-500 ease-out origin-top-right">
                <div onClick={() => toggleLang("en")} className="cursor-pointer px-2 py-2 hover:bg-white hover:rounded-[20px] flex justify-end items-center">
                  <span className="font-inter text-base mr-1">English</span>
                  <Image src="/images/flag_en.png" alt="EN" width={32} height={24} />
                </div>
                <div onClick={() => toggleLang("id")} className="cursor-pointer px-2 py-2 hover:bg-white hover:rounded-[20px] flex justify-end">
                  <span className="font-inter text-base mr-1">Bahasa Indonesia</span>
                  <Image src="/images/flag_id.png" alt="ID" width={32} height={24} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex max-w-3xl xl:max-w-[1060px] mx-auto px-4 py-3 justify-between items-center bg-white rounded-[20px] shadow-sm">
        {/* Logo */}
        <Link href="/" className="block w-[202px] h-auto z-50">
          <Image src="/images/logo-ibfound.png" alt="IBioFund Logo" width={202} height={48} priority className="object-contain" />
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="space-x-6 text-black font-manrope font-bold">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className={`hover:opacity-90 hover:underline transition ${isActive ? "text-black opacity-100" : "text-black opacity-40"}`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link href="/invest" className="bg-[#3DBF19] hover:bg-green-400 text-white px-4 py-2 rounded-[10px] font-bold">
            Invest now
          </Link>
        </div>

        {/* Mobile: Language Selector & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden z-50">
          {/* Language Mobile */}
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md">
              <Image src={`/images/flag_${lang}.png`} alt="flag" width={40} height={30} />
              <Image src="/images/Polygon.png" alt="dropdown" width={12} height={8} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-[201px] z-50">
                <div className="bg-gray-100 rounded-[20px] shadow-md overflow-hidden transition-all duration-500 ease-out origin-top-right">
                  <div onClick={() => toggleLang("en")} className="cursor-pointer px-2 py-2 hover:bg-white hover:rounded-[20px] flex justify-end items-center">
                    <span className="font-inter text-base mr-1">English</span>
                    <Image src="/images/flag_en.png" alt="EN" width={32} height={24} />
                  </div>
                  <div onClick={() => toggleLang("id")} className="cursor-pointer px-2 py-2 hover:bg-white hover:rounded-[20px] flex justify-end">
                    <span className="font-inter text-base mr-1">Bahasa Indonesia</span>
                    <Image src="/images/flag_id.png" alt="ID" width={32} height={24} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Button */}
          <button onClick={() => setMenuOpen(true)}>
            <Image src="/images/icon-hamburger.png" alt="menu" width={28} height={28} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 px-8 py-10 animate-slide-down">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <Image src="/images/icon-close.png" alt="close" width={20} height={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-10 flex flex-col gap-1 font-bold text-[36px]">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className={`${pathname === link.href ? "text-black" : "text-black opacity-40"} hover:opacity-100`}>
                {link.name}
              </Link>
            ))}

            <Link href="/invest" onClick={() => setMenuOpen(false)} className="bg-[#3DBF19] text-white px-4 py-2 mt-4 rounded-[20px] text-center">
              Invest now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
