import { useCallback } from "react";

export interface CalendarEventParams {
  title: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
}

export const useAddToGoogleCalendar = () => {
  const addEvent = useCallback((params: CalendarEventParams): void => {
    const { title, description, location, start, end } = params;

    const formatDate = (date: Date): string =>
      date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const startTime = formatDate(start);
    const endTime = formatDate(end);

    const url =
      `https://www.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(title)}` +
      `&details=${encodeURIComponent(description || "")}` +
      `&location=${encodeURIComponent(location || "")}` +
      `&dates=${startTime}/${endTime}` +
      `&ctz=Asia/Jakarta`;

    window.open(url, "_blank");
  }, []);

  return addEvent;
};
