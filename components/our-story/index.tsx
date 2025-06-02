import Link from "next/link";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { StoryItem } from "@/components/our-story/story-item";

import { siteConfig } from "@/config";

export const OurStory = () => {
  return (
    <SectionWrapper className="mx-auto max-w-4xl">
      <Heading
        title="Our Story"
        description="A short story about the two of us"
      />
      <ol className="relative mt-6 flex flex-col gap-8 border-s border-amber-900 md:mt-8 md:gap-10">
        <StoryItem
          date="5 Oktober 2024"
          title="Awal pacaran"
          imgPath={siteConfig.assets.images.ourStory[0]}
        >
          <p>
            Kelihatan kah?, kalo gk tau biar saya kasih tau. Itu Volendam. Yap..
            tempat minum kopi yang letaknya berada di{" "}
            <Link
              href="https://www.instagram.com/volendamcafe"
              target="_blank"
              className="text-amber-600 underline"
            >
              Kayutangan Malang.
            </Link>{" "}
            Tepat di depan Cafe itu aku menyatakan suka ke Hana.
          </p>
        </StoryItem>
        <StoryItem
          date="11 November 2024"
          title="Pertama Kerumah dan Ketemu Orangtua"
          imgPath={siteConfig.assets.images.ourStory[1]}
        >
          <p>
            Gk ada yang perlu di jelaskan kayaknya.. ya seperti orang pada
            umumnya petama kali kerumah pasangan. Ditanya kerja dimana, kenal
            dimana, sudah lama kah dll.. oh iyaa Hana bawa Donat Bahagia biar
            bahagia katanya dia sih 😁.
          </p>
        </StoryItem>
        <StoryItem
          date="29 Desember 2024"
          title="Tunangan"
          imgPath={siteConfig.assets.images.ourStory[2]}
          className="object-center"
        >
          <p>Cepet yaaa.. udah tunangan aja.. 👀.</p>
        </StoryItem>
        <StoryItem
          date=" 8 Juni 2025"
          title="Kita Menikah"
          imgPath={siteConfig.assets.images.ourStory[3]}
          className="object-[100%_40%]"
        >
          <p>
            Fotonya pake foto Prewedding dulu yaa.. belum tanggal{" "}
            <span className="text-amber-600">8 juni 2025</span> bro pada saat
            undangan digital ini dibuat. Ini aku ketik masih tanggal 15 Mei 2025
            😘.
          </p>
        </StoryItem>
      </ol>
    </SectionWrapper>
  );
};
