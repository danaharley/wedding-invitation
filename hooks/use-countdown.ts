import { useEffect, useRef, useState } from "react";

import { getRemainingTime } from "@/lib/utils";

export const useCountdown = (targetDate: string) => {
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const updateRemaining = () => {
      const remaining = getRemainingTime(targetTime);
      setTimeRemaining(remaining);

      if (remaining <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    updateRemaining();
    intervalRef.current = setInterval(updateRemaining, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [targetDate]);

  return timeRemaining;
};
