import Link from "next/link";

export default function SupportSection() {
  return (
    <div className="relative z-20 -mt-18 mb-8 px-3 md:px-6 lg:px-0">
      <div
        className="max-w-4xl xl:max-w-7xl px-6 md:px-14 py-6 md:py-[60px] mx-auto rounded-[30px] flex flex-col md:flex-row justify-between items-center gap-6 bg-[#3DBF19] overflow-hidden relative"
        style={{
          backgroundImage: `url('/images/vector1.png'), url('/images/vector2.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left, right",
          backgroundSize: "contain, contain",
        }}
      >
        <h2 className="md:max-w-[300px] lg:max-w-[420px] xl:max-w-[620px] text-2xl md:text-3xl lg:text-5xl font-bold text-left md:text-left leading-[120%] text-white">Support the development of the IBioFund</h2>

        <Link href="/invest" className="w-full md:w-auto text-center  bg-[#0C5A3C] hover:bg-green-800 text-white text-2xl md:text-3xl lg:text-[32px] px-6 py-3 rounded-[20px] font-bold">
          Invest now
        </Link>
      </div>
    </div>
  );
}
