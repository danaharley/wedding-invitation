import Image from "next/image";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Heading } from "@/components/ui/heading";

import { siteConfig } from "@/config";

export const Gallery = () => {
  return (
    <SectionWrapper className="my-6 p-0 md:my-16 md:p-0">
      <Heading title="Our Gallery" className="mb-4 text-center" />
      <div className="columns-2 gap-3 space-y-3 p-3 md:columns-3 xl:columns-4">
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
