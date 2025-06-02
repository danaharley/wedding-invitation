import { NextImage } from "@/components/ui/next-image";

import { siteConfig } from "@/config";

import { belove } from "@/lib/fonts";

import { User } from "@/app/generated/prisma";

type Props = {
  user: User;
};

export const Cover = ({ user }: Props) => {
  return (
    <section className="relative grid h-dvh w-full grid-cols-6 grid-rows-8 xl:gap-2">
      <div className="absolute inset-0 z-10 bg-black/25" />
      <div className="relative col-span-6 row-span-5 h-full w-full xl:col-span-4 xl:row-span-8">
        <NextImage src={siteConfig.assets.images.cover[0]} alt="Dana & Hana" />
      </div>
      <div className="relative col-span-3 row-span-4 xl:col-span-2">
        <NextImage src={siteConfig.assets.images.cover[1]} alt="Dana" />
      </div>
      <div className="relative col-span-3 row-span-4 xl:col-span-2">
        <NextImage src={siteConfig.assets.images.cover[2]} alt="Hana" />
      </div>
      <div className="absolute z-20 grid h-full w-full grid-cols-3 grid-rows-12 justify-items-center text-white">
        <h1
          className={`${belove.className} col-span-3 content-end text-5xl text-shadow-2xs md:text-7xl xl:col-span-2 xl:row-span-2 xl:content-center xl:text-8xl`}
        >
          Save The Date
        </h1>

        <div className="font-prata relative col-span-3 row-start-5 grid grid-cols-[1fr_30px_1fr] place-items-center xl:col-span-2">
          <h1 className="absolute -top-3 -left-11 text-6xl text-shadow-2xs md:-top-0">
            D
          </h1>
          <span className="absolute text-9xl text-shadow-2xs">/</span>
          <h1 className="absolute -right-12 -bottom-3 text-6xl text-shadow-2xs md:-bottom-0">
            H
          </h1>
        </div>

        <div className="col-span-3 row-start-8 xl:col-span-2">
          <div className="flex flex-col items-center justify-center text-sm md:text-base">
            <p className="text-shadow-2xs">Please Join With Us</p>
            <p className="text-shadow-2xs">To Celebrete Our Wedding On</p>
            <div className="my-4 flex items-center gap-4">
              <p className="border-y px-2 font-medium text-shadow-2xs">Juni</p>
              <p className="font-prata text-5xl font-bold text-shadow-2xs">
                10
              </p>
              <p className="border-y px-2 font-medium text-shadow-2xs">2025</p>
            </div>
          </div>
        </div>

        <div className="col-span-3 row-start-11 flex flex-col items-center justify-center xl:col-span-2">
          <p className="text-shadow-2xs">Kepada Yth,</p>
          <p className="text-xs text-shadow-2xs md:text-base">
            Bapak/Ibu/Saudara/i
          </p>
          <p className="my-4 min-w-32 rounded-lg border border-dashed bg-stone-900/75 p-4 text-center uppercase text-shadow-2xs md:my-8">
            {user.name}
          </p>
          <p className="text-xs text-shadow-2xs md:text-base">
            Tambakdono RT 01 RT 07
          </p>
          <p className="text-xs text-shadow-2xs md:text-base">
            Kec. Pakal, Kel. Sumber Rejo, Surabaya
          </p>
        </div>
      </div>
    </section>
  );
};
