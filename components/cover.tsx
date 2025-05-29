import { NextImage } from "@/components/ui/next-image";

import { siteConfig } from "@/config";

import { belove } from "@/lib/fonts";

import { User } from "@/app/generated/prisma";

type Props = {
  user: User;
};

export const Cover = ({ user }: Props) => {
  return (
    <section className="relative w-full h-dvh grid grid-cols-6 grid-rows-8 xl:gap-2">
      <div className="absolute inset-0 bg-black/25 z-10" />
      <div className="col-span-6 xl:col-span-4 row-span-5 xl:row-span-8 relative w-full h-full">
        <NextImage src={siteConfig.assets.images.cover[0]} alt="Dana & Hana" />
      </div>
      <div className="col-span-3 xl:col-span-2 row-span-4 relative">
        <NextImage src={siteConfig.assets.images.cover[1]} alt="Dana" />
      </div>
      <div className="col-span-3 xl:col-span-2 row-span-4 relative">
        <NextImage src={siteConfig.assets.images.cover[2]} alt="Hana" />
      </div>
      <div className="grid grid-cols-3 grid-rows-12 z-20 absolute w-full h-full justify-items-center text-white">
        <h1
          className={`${belove.className} text-5xl md:text-7xl text-shadow-2xs content-end xl:text-8xl col-span-3 xl:col-span-2 xl:row-span-2 xl:content-center`}
        >
          Save The Date
        </h1>

        <div className="grid grid-cols-[1fr_30px_1fr] place-items-center font-prata row-start-5 relative col-span-3 xl:col-span-2">
          <h1 className="text-6xl absolute -left-11 -top-3 text-shadow-2xs md:-top-0">
            D
          </h1>
          <span className="text-9xl absolute text-shadow-2xs">/</span>
          <h1 className="text-6xl absolute -right-12 -bottom-3 text-shadow-2xs md:-bottom-0">
            H
          </h1>
        </div>

        <div className="row-start-8 col-span-3 xl:col-span-2">
          <div className="flex flex-col items-center justify-center text-sm md:text-base">
            <p className="text-shadow-2xs">Please Join With Us</p>
            <p className="text-shadow-2xs">To Celebrete Our Wedding On</p>
            <div className="flex items-center gap-4 my-4">
              <p className="border-y px-2 font-medium text-shadow-2xs">Juni</p>
              <p className="font-bold text-5xl font-prata text-shadow-2xs">
                10
              </p>
              <p className="border-y px-2 font-medium text-shadow-2xs">2025</p>
            </div>
          </div>
        </div>

        <div className="row-start-11 flex flex-col items-center justify-center col-span-3 xl:col-span-2">
          <p className="text-shadow-2xs">Kepada Yth,</p>
          <p className="text-xs md:text-base text-shadow-2xs">
            Bapak/Ibu/Saudara/i
          </p>
          <p className="p-4 border min-w-32 text-center border-dashed rounded-lg my-4 md:my-8 bg-stone-900/75 text-shadow-2xs uppercase">
            {user.name}
          </p>
          <p className="text-xs md:text-base text-shadow-2xs">
            Tambakdono RT 01 RT 07
          </p>
          <p className="text-xs md:text-base text-shadow-2xs">
            Kec. Pakal, Kel. Sumber Rejo, Surabaya
          </p>
        </div>
      </div>
    </section>
  );
};
