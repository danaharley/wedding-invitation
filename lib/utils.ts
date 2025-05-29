import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRemainingTime = (targetTime: number) => {
  const now = Date.now();
  return Math.max(targetTime - now, 0);
};

export const formatDate = (date: string | number | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
