import { Heading } from "@/components/ui/heading";
import { NextImage } from "@/components/ui/next-image";

import { siteConfig } from "@/config";

export const Footer = () => {
  return (
    <footer className="mt-16 md:mt-28">
      <Heading title="Thank You" className="mb-8 text-center md:mb-16" />
      <div className="relative h-[calc(100dvh-3.5rem)] w-full">
        <NextImage
          src={siteConfig.assets.images.footer}
          alt="Dana&Hana"
          className="2xl:object-[100%_55%]"
        />
      </div>
      <p className="flex h-14 items-center justify-center text-sm font-semibold tracking-tight text-white">
        Copyright ©2025 Created with ❤️ by Dana Harliansyah
      </p>
    </footer>
  );
};
