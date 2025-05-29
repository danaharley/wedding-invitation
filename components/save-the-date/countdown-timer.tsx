"use client";

import { useMemo } from "react";

import { useAddToGoogleCalendar } from "@/hooks/use-add-to-google-calendar";
import { useCountdown } from "@/hooks/use-countdown";

import { formatDate } from "@/lib/utils";

const EVENT_DATE = "2025-06-10T12:30:00+07:00";

export const CountdownTimer = () => {
  const timeRemaining = useCountdown(EVENT_DATE);
  const addToCalendar = useAddToGoogleCalendar();

  const handleClick = () => {
    const start = new Date("2025-06-10T12:30:00+07:00");
    const end = new Date("2025-06-10T22:00:00+07:00");

    addToCalendar({
      title: "The Wedding of Dana dan Hana",
      description:
        "Visit the invitation here https https://danahana.vercel.app/",
      location: "Tambakdono RT 01 RW 07",
      start,
      end,
    });
  };

  const formattedTime = useMemo(() => {
    if (timeRemaining === null) return null;

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  }, [timeRemaining]);

  if (timeRemaining === null) return null; // Skip SSR render

  if (timeRemaining !== null && timeRemaining <= 0) {
    return (
      <div className="flex items-center justify-center font-mulish text-amber-900/45">
        <p className="text-center text-[min(17vw,5rem)] leading-none font-black">
          Acara Selesai
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col hover:cursor-pointer"
      role="button"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2 font-prata text-sm md:textbas font-semibold text-amber-600 md:justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
        </svg>
        {formatDate(EVENT_DATE)}
      </div>
      <div className="flex items-center justify-center font-mulish text-amber-900/45">
        <p className="text-center text-[min(17vw,10rem)] leading-none font-black">
          {formattedTime?.days}:<span className="block text-base">days</span>
        </p>
        <p className="text-center text-[min(17vw,10rem)] leading-none font-black">
          {formattedTime?.hours}:<span className="block text-base">hours</span>
        </p>
        <p className="text-center text-[min(17vw,10rem)] leading-none font-black">
          {formattedTime?.minutes}:
          <span className="block text-base">minutes</span>
        </p>
        <p className="text-center text-[min(17vw,10rem)] leading-none font-black">
          {formattedTime?.seconds}
          <span className="block text-base">seconds</span>
        </p>
      </div>
    </div>
  );
};
