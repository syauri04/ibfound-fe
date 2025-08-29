// app/news/detail/page.tsx
import Image from "next/image";

const article = {
  id: 1,
  slug: "inclusive-financing-green-economy",
  title: "Promoting Inclusive Financing for the Green Economy, UNDP Indonesia and BPDLH Develop De-risking Schemes, Sharia Revolving Funds, and Catalytic Financing",
  date: "02 June 2025",
  image: "/images/news1.png",
  category: "Events",
  content1: `Jakarta, 29 May 2025 – The Environmental Fund Management Agency (BPDLH) and the United Nations Development Programme (UNDP) Indonesia officially launched two financing instruments...`,
  content2: `Jakarta, 29 May 2025 – The Environmental Fund Management Agency (BPDLH) and the United Nations Development Programme (UNDP) Indonesia officially launched two financing instruments...`,
};

export default function NewsDetail() {
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-[480px] z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          opacity: 0.05,
        }}
      />

      <section className="relative z-10 max-w-4xl mx-auto px-3 md:px-6 lg:px-4 pt-[120px] md:pt-[190px] pb-10 md:pb-32">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full text-base font-inter border font-normal border-[#3DBF19] text-[#3DBF19] mb-6">{article.category}</div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#0C5A3C] leading-[120%] tracking-[-0.01em] mb-3 md:mb-8">{article.title}</h1>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-4 md:mb-10">{article.date}</p>

        {/* Content 1 */}
        <div className="prose prose-lg max-w-none text-gray-800 prose-p:mb-4">
          {article.content1
            .trim()
            .split("\n\n")
            .filter(Boolean)
            .map((paragraph, idx) => (
              <p key={idx} className="mb-6">
                {paragraph.trim()}
              </p>
            ))}
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-xl my-8">
          <Image src={article.image} alt={article.title} width={1200} height={500} className="w-full object-cover rounded-xl" />
        </div>

        {/* Content 2 */}
        <div className="prose prose-lg max-w-none text-gray-800 prose-p:mb-4">
          {article.content2
            .trim()
            .split("\n\n")
            .filter(Boolean)
            .map((paragraph, idx) => (
              <p key={idx} className="mb-6">
                {paragraph.trim()}
              </p>
            ))}
        </div>
      </section>
    </div>
  );
}
