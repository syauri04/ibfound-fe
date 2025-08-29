import HaqSection from "@/components/HaqSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function RecipientProfilePage() {
  return (
    <div>
      <HeroSection title="Recipients Profile" />

      <section className="max-w-4xl mx-auto px-3 md:px-6 py-10 md:py-20">
        <h1 className="text-2xl md:text-[40px] font-bold mb-10 md:mb-16">Tarjan, a coffee farmer at the edge of park area</h1>
        <div className="mb-10 md:mb-16 flex justify-center">
          <Image src="/images/recipient-tarzan.png" alt="Tarjan" width={620} height={578} className="object-contain  h-auto" priority />
        </div>
        <div className="mb-5">
          <div className="font-normal leading-6 opacity-[0.8] font-inter">
            <p>
              The Bukit Barisan Selatan National Park (BBSNP), located in the southern part of the Indonesian island of Sumatra, is home to many native species including the rare and elusive Sumatran tigers. This region is the production
              centre of Robusta Coffee in Indonesia. At the borders of the national park, clusters of smallholder coffee farmers grow the Lampung Robusta coffee, known and loved for its delicate and smooth chocolaty taste.
              <br />
              <br />
              Most coffee farms in the area are owned and managed by smallholder farmer families. In average each family owned 1-2 hectare of coffee farm. In Ujung Rembun Village, directly bordering the BBSNP in the north, Tarjan’s family
              have grown coffee for generations. He is one of the first farmers to receive WCS Good Agricultural Practices (GAP) training under the BBS Kemitraan Komoditas Lestari (BBS KEKAL, Sustainable Commodity Partnership) program. This
              is an innovative program, codeveloped between WCS and the Bukit Barisan National Park, to seek a win-win solution for coffee farmers and wildlife conservation. Having successfully improved the quality and quantity of his
              coffee production through the application of GAP, Tarjan aims to inspire other farmers in his village to follow in his footsteps by sharing his experiences and learning directly from his demonstration plot.
              <br />
              <br />
              Tarjan inherited two hectare of coffee farm from his parents with extremely low productivity due to aging coffee threes. From the two hectares of land, he only produced around 60 kilograms of coffee bean. When WCS came into
              the village in 2019 and introduced the importance of forest conservation and sustainable agriculture, and delivering Good Agricultural Practices (GAP) training, Tarjan voluntarily joined the program with a hope to improve his
              coffee production.
              <br />
              <br />
              Applying his newly acquired knowledge into his farming practices, Tarjan managed to improve his coffee production to 600 kg/2 ha within a year. In the following year, the coffee production increased significantly to 1600 kg
              from 2 hectares of land. Nowadays, Tarjan managed to get maximum yield from his land up to 3600 kg/2 ha.
              <br />
              <br />
              Tarjan has learned that by implementing the good agricultural practices, he can maximize his two-hectare farmland. He also gets additional sources of income from fruit trees that were planted as shade tree and chilly as
              intercrop in his coffee farm. He understood that planting shade trees and cover crop in his farm will prevent erosion, improve soil health and wateravailability, suppress weed, control pest and disease, which at the same time
              reducing his production cost.
              <br />
              <br />
              The improvement motivated Tarjan to continue learning and applying the good agricultural practices while sharing his knowledge and experience with his fellow farmers. He demonstrated that without expanding the farmland into
              the national park, he could get better yield and increased income, without worrying about breaking the law.
              <br />
              <br />
              Through BBS KEKAL, Tarjan also learnt the post-harvesting techniques which increased the quality of his coffee bean. He hopes with improved quantity and quality they can have better access to market and better prices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
