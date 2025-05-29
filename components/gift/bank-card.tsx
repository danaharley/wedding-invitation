"use client";

import Image from "next/image";

import { useClipboard } from "@/hooks/use-clipboard";

type Props = {
  bankName: string;
  imgSrc: string;
  accountNumber: string;
  accountHolder: string;
};

export const BankCard = ({
  bankName,
  imgSrc,
  accountNumber,
  accountHolder,
}: Props) => {
  const { isCopied, copy } = useClipboard();

  return (
    <div
      className="relative w-full h-28 md:h-40 hover:cursor-pointer"
      onClick={() => copy(accountNumber)}
    >
      <Image
        src={imgSrc}
        alt={bankName}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 90vw"
      />
      <div className="absolute w-full h-full flex flex-col justify-end text-white bg-amber-950/90 p-2">
        <p className="text-xs">No. Rekening:</p>
        <p className="font-mono text-xl font-bold tracking-wide">
          {accountNumber}
        </p>
        <p className="text-xs">a/n {accountHolder}</p>
      </div>

      <p className="absolute top-0 right-0 text-xs text-white p-1.5">
        {isCopied ? "Copied" : "Click to copy"}
      </p>
    </div>
  );
};
