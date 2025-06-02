import { derivia } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  title: string;
  day: string;
  date: string;
  month: string;
  year: string;
  time: string;
  location: string;
  address: string;
};

export const VenueInfo = ({
  className,
  title,
  day,
  date,
  month,
  year,
  time,
  location,
  address,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-6 text-white md:px-20",
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
        <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
        <path d="M18 22v-3" />
        <circle cx="10" cy="10" r="3" />
      </svg>
      <h2 className={`${derivia.className} text-xl lg:text-3xl`}>{title}</h2>
      <div className="font-mulish flex flex-col items-center gap-2">
        <p className="text-sm font-bold lg:text-lg">{day}</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-4xl font-bold lg:text-5xl">{date}</p>
          <div className="inline-block min-h-[1em] w-[1px] self-stretch bg-white" />
          <p className="text-xs lg:text-base">
            {month} <br /> {year}
          </p>
        </div>
        <p className="text-sm font-bold lg:text-base">{time}</p>
      </div>
      <p className="font-mulish text-lg font-semibold lg:text-2xl">
        {location}
      </p>
      <p className="font-mulish text-center lg:text-lg">{address}</p>
    </div>
  );
};
