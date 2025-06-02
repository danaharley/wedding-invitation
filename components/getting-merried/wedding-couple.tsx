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
    <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
      <NextImage src={imgPath} alt={couple} />
      <div className="absolute bottom-0 h-fit w-full bg-amber-900/45 p-2 text-white">
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
