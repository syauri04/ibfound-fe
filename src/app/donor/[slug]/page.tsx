import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function DonorProfile() {
  return (
    <div>
      <HeroSection title="Donor Profile" />

      <section className="max-w-4xl xl:max-w-7xl mx-auto px-3 md:px-6 lg:px-0 py-10 md:py-20">
        <h1 className="text-2xl md:text-[40px] font-bold text-center mb-10 md:mb-20">Liz Claiborne Art Ortenberg Foundation</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Gambar */}
          <div className="w-full lg:w-1/2">
            <img src="/images/donor_profile.png" alt="Donor Profile" className="w-full h-auto lg:h-[930px] rounded-xl object-cover" />
          </div>

          {/* Teks */}
          <div className="w-full lg:w-1/2 flex lg:items-center">
            <p className="text-2xl leading-8 text-[#0C5A3C] opacity-[0.8] italic font-inter lg:h-[930px] flex items-center">
              <span>
                <strong>In February 1987, Liz and Art went on their first wildlife safari to Kenya and Tanzania.</strong> It was on that trip that they became captivated by the beauty and majesty of Africa’s iconic wildlife species and
                realized that the survival of these animals was deeply intertwined with that of local people who lived and depended on these same lands and resources.
                <br />
                <br />
                Liz and Art were well ahead of their time in recognizing that national parks and protected areas alone would never be enough to ensure the survival of many species -- especially large predators, or migratory and keystone
                species such as lions and elephants. Since then, conservationists have come to understand the critical role that local communities can and must play in the protection of large landscapes, and the importance of aligning the
                needs of wildlife with those of local people sharing the land -- be they Maasai herdsmen, Malagasy farmers or Montanan ranchers.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-0 pb-10 md:pb-20">
        <div className="mb-5">
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              Since establishment of the Foundation in 1987, Liz and Art’s generosity has helped launch many innovative projects. Their support for conservation projects and leaders were grounded in a recognition that people and nature must
              find a way to thrive in harmony if either is to survive in the future.
              <br />
              <br />
              There have been many experiments and notable successes over the years. From ground-breaking research and conferences to scores of innovative field-based projects, the Foundation has helped protect some of the world’s most
              important landscapes. When poaching threatened the survival of elephants and tigers, the Foundation invested heavily to stem those crises. As species populations have rebounded, the challenge of managing human wildlife
              conflict has taken center stage. As new threats and opportunities emerge, we seek creative and flexible solutions and support visionaryleaders dedicated to community-based conservation that embraces both people and nature.
              <br />
              <br />
              At the heart of community-based conservation is a belief that nature and people can and must thrive together, and that local support for a healthy natural environment is critical to long term success. It can be hard and
              sometimes slow work, but the importance of working together, listening to and amplifying the voices of people close to the ground to create a sustainable future is more important than ever.
              <br />
              <br />
              Of course, huge challenges remain in every place we work. Increased land clearing for agricultural development and rapidly increasing numbers of people and livestock are stressing many ecosystems, especially in Africa where
              changing weather patterns are exacerbating cyclical droughts. In some places ill-conceived development plans, often pushed by interests outside local communities, threaten key protected areas or wildlife habitats. Elsewhere,
              weak enforcement of regulations, efforts to roll-back existing environmental laws, and wildlife trafficking are the most urgent challenges. In each place we invest, the Foundation seeks to understand the current threats and
              opportunities, and to provide catalytic grants that make tangible improvements that benefit the shared interests of wildlife and local people.
              <br />
              <br />
              Liz and Art are no longer with us, but their vision, commitment and generosity continues to inspire us and our partners to leave the world a better place, for all of us who share it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
