"use client";

import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <>
      <HeroSection title="Contact Us" />
      <section className="max-w-4xl xl:max-w-7xl mx-auto px-3 md:px-6 lg:px-0 py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-[40px] font-bold">Address</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src="/images/icon_location.png" alt="Address Icon" className="w-6 md:w-8 h-6 md:h-8 mt-1" />
              <p className="font-inter text-base md:text-2xl opacity-[0.8] ">
                Jalan Malabar 1 No. 11, Babakan, <br />
                Bogor, West Java 16128
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/images/icon_phone.png" alt="Phone Icon" className="w-6 md:w-8 h-6 md:h-8" />
              <p className="font-inter text-base md:text-2xl opacity-[0.8]">(62)251 8342135 / 8306029</p>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507317.2509158029!2d106.245307465625!3d-6.595105000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c433bc96dfa7%3A0x9580b79707227233!2sWildlife%20Conservation%20Society%20-%20Indonesia%20Program!5e0!3m2!1sen!2sid!4v1753340834204!5m2!1sen!2sid"
              width="620"
              height="466"
              className="w-full rounded-[16px] border"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
