import Image from "next/image";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";

import { siteConfig } from "@/config";

export const Gallery = () => {
  return (
    <SectionWrapper className="my-6 md:my-16 p-0 md:p-0">
      <Heading title="Our Gallery" className="text-center mb-4" />
      <div className="p-3 columns-2 md:columns-3 xl:columns-4 gap-3 space-y-3">
        {siteConfig.assets.images.ourGallery.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`image-${index}`}
              width={500}
              height={500}
              className="w-full rounded-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 90vw"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
