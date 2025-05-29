import { Heading } from "@/components/ui/heading";
import { NextImage } from "@/components/ui/next-image";

import { siteConfig } from "@/config";

export const Footer = () => {
  return (
    <footer className="mt-16 md:mt-28">
      <Heading title="Thank You" className="text-center mb-8 md:mb-16" />
      <div className="relative w-full h-[calc(100dvh-3.5rem)]">
        <NextImage
          src={siteConfig.assets.images.footer}
          alt="Dana&Hana"
          className="2xl:object-[100%_55%]"
        />
      </div>
      <p className="text-sm tracking-tight font-semibold flex items-center justify-center h-14 text-white">
        Copyright ©2025 Created with ❤️ by Dana Harliansyah
      </p>
    </footer>
  );
};
