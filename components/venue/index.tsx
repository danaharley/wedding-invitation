import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { NextImage } from "@/components/ui/next-image";
import { VenueInfo } from "@/components/venue/venue-info";

import { siteConfig } from "@/config";

export const Venue = () => {
  return (
    <SectionWrapper className="h-[850px] md:h-[600px] lg:h-[740px] mb-8 p-0 md:p-0 md:mb-16">
      <div className="absolute inset-0 bg-black/45 z-10" />
      <NextImage
        src={siteConfig.assets.images.venue}
        alt="Dana & Hana"
        className="grayscale 2xl:object-[100%_51%]"
      />
      <div className="absolute z-10 w-full p-6 flex flex-col gap-6 lg:p-8 lg:gap-16">
        <Heading
          title="Venue"
          className="text-white/25 text-center text-6xl md:text-8xl"
        />
        <div className="w-full md:w-fit mx-auto h-fit grid grid-cols-1 md:grid-cols-2 border md:border-0 rounded-lg">
          <VenueInfo
            className="md:border-r"
            title="Akad Nikah"
            day="Minggu"
            date="08"
            month="Juni"
            year="2025"
            time="10.00 - selesai"
            location="Kediaman Mempelai Wanita"
            address="Kendangsari XIV-A/14, Kendangsari, Kec. Tenggilis Mejoyo, Surabaya."
          />
          <VenueInfo
            title="Ngunduh Mantu"
            day="Selasa"
            date="10"
            month="Juni"
            year="2025"
            time="12.30 - selesai"
            location="Kediaman Mempelai Pria"
            address="Tambakdono RT 01 RW 07, Sumber Rejo, Kec. Pakal, Surabaya."
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
