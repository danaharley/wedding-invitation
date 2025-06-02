import { NextImage } from "@/components/ui/next-image";

import { cn } from "@/lib/utils";

type Props = {
  date: string;
  imgPath: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export const StoryItem = ({
  date,
  imgPath,
  title,
  children,
  className,
}: Props) => {
  return (
    <li className="ms-4 md:ms-6">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-amber-900 bg-amber-600" />
      <time className="text-sm leading-none font-normal text-amber-100">
        {date}
      </time>
      <h3 className="text-lg font-medium text-amber-600">{title}</h3>
      <div className="relative my-2.5 aspect-video overflow-hidden rounded-lg">
        <NextImage
          src={imgPath}
          alt={title}
          className={cn("object-top", className)}
        />
      </div>
      <div className="flex flex-col gap-4 text-white">{children}</div>
    </li>
  );
};
