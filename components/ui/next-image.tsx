import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { getPlaceholder } from "@/lib/img-placeholder";

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const NextImage = async ({ src, alt = "image", className }: Props) => {
  if (!src || typeof src !== "string") {
    throw new Error("Image src must be a string");
  }

  const { placeholder } = await getPlaceholder(src);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn("object-cover object-center", className)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 90vw"
      placeholder="blur"
      blurDataURL={placeholder}
      priority
    />
  );
};
