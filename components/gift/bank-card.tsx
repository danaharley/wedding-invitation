"use client";

import Image from "next/image";

import { useClipboard } from "@/hooks/use-clipboard";
import { useCountdown } from "@/hooks/use-countdown";

type Props = {
  bankName: string;
  imgSrc: string;
  accountNumber: string;
  accountHolder: string;
};

const EVENT_DATE = "2025-06-10T12:30:00+07:00";

export const BankCard = ({
  bankName,
  imgSrc,
  accountNumber,
  accountHolder,
}: Props) => {
  const { isCopied, copy } = useClipboard();
  const timeLeft = useCountdown(EVENT_DATE);

  const handleCopy = () => {
    if (timeLeft !== null && timeLeft <= 0) {
      copy("xxxxxxxx");
    } else {
      copy(accountNumber);
    }
  };

  return (
    <div
      className="relative w-full h-28 md:h-40 hover:cursor-pointer"
      onClick={handleCopy}
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
          {timeLeft ? accountNumber : "xxxxxxxx"}
        </p>
        <p className="text-xs">a/n {accountHolder}</p>
      </div>

      <p className="absolute top-0 right-0 text-xs text-white p-1.5">
        {isCopied ? "Copied" : "Click to copy"}
      </p>
    </div>
  );
};
