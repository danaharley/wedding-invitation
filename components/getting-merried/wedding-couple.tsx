import { NextImage } from "@/components/ui/next-image";

import { belove } from "@/lib/fonts";

type Props = {
  couple: string;
  coupleInfo: {
    gender: "male" | "female";
    parents: string;
  };
  imgPath: string;
};

export const WeddingCouple = ({ couple, coupleInfo, imgPath }: Props) => {
  return (
    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
      <NextImage src={imgPath} alt={couple} />
      <div className="absolute bottom-0 bg-amber-900/45 p-2 w-full h-fit text-white">
        <p className={`${belove.className} text-[min(21px,6vw)] text-white`}>
          {couple}
        </p>
        <span className="text-xs font-medium tracking-tight">
          {coupleInfo.gender === "male" ? "Putra dari" : "Putri dari"}
          <p>{coupleInfo.parents}</p>
        </span>
      </div>
    </div>
  );
};
