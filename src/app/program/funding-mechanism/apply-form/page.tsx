"use client";

import Image from "next/image";
import { useState } from "react";

export default function ApplyFormPage() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/picture2.png" alt="Submission Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Form Section */}
      <section className="flex items-center justify-center pt-[120px] md:pt-[190px] pb-10 md:pb-20 px-3 md:px-4">
        <div className="bg-white max-w-[620px] w-full rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-[40px] font-bold mb-10 text-black">Support IBioFund</h2>
          <p className="text-[20px] font-bold mb-8">Your Information</p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">First name *</label>
                <input type="text" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Last name *</label>
                <input type="text" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Email address *</label>
                <input type="email" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone number *</label>
                <input type="tel" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Organization / Research / Personal / etc.</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option value="">Select one</option>
                <option value="organization">Organization</option>
                <option value="research">Research</option>
                <option value="personal">Personal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Attachment</label>
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                />
                <p className="text-xs text-gray-400">Max. 25MB</p>
              </div>
              {fileName && <div className="mt-2 text-sm text-gray-700 italic">{fileName}</div>}
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">or add a URL</p>
              <input type="url" className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="https://..." />
            </div>

            <div>
              <button type="submit" className="w-full bg-[#3DBF19] text-white text-lg font-semibold py-3 rounded-md hover:bg-green-600 transition">
                Submit Proposal
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Line effect image at the bottom */}
      <div className="w-full">
        <Image src="/images/line_hero.png" alt="Line effect" width={1600} height={100} className="w-full h-auto" />
      </div>
    </div>
  );
}
