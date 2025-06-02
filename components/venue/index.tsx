import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";
import { NextImage } from "@/components/ui/next-image";
import { VenueInfo } from "@/components/venue/venue-info";

import { siteConfig } from "@/config";

export const Venue = () => {
  return (
    <SectionWrapper className="mb-8 h-[850px] p-0 md:mb-16 md:h-[600px] md:p-0 lg:h-[740px]">
      <div className="absolute inset-0 z-10 bg-black/45" />
      <NextImage
        src={siteConfig.assets.images.venue}
        alt="Dana & Hana"
        className="grayscale 2xl:object-[100%_51%]"
      />
      <div className="absolute z-10 flex w-full flex-col gap-6 p-6 lg:gap-16 lg:p-8">
        <Heading
          title="Venue"
          className="text-center text-6xl text-white/25 md:text-8xl"
        />
        <div className="mx-auto grid h-fit w-full grid-cols-1 rounded-lg border border-white/25 md:w-fit md:grid-cols-2 md:border-0">
          <VenueInfo
            className="md:border-r md:border-white/25"
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
            time="18.00 - selesai"
            location="Kediaman Mempelai Pria"
            address="Tambakdono RT 01 RW 07, Sumber Rejo, Kec. Pakal, Surabaya."
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
