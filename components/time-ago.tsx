"use client";

import React, { useState, useEffect } from "react";

import { cn, formatTime } from "@/lib/utils";

type TimeAgoProps = {
  timestamp: Date;
  className?: string;
};

export const TimeAgo = ({ timestamp, className }: TimeAgoProps) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const updateTimeAgo = () => {
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - timestamp.getTime();

      const minute = 60 * 1000;
      const hour = 60 * minute;
      const day = 24 * hour;
      const month = 30 * day;
      const year = 365 * day;

      let result = "";

      // example setTimeAgo(`${minutes} minute${minutes > 1 ? "s" : ""} ago`); 1 minutes ago
      if (timeDifference < minute) {
        // setTimeAgo("a few second ago");
        result = "a few second ago";
      } else if (timeDifference < hour) {
        const minutes = Math.floor(timeDifference / minute);
        // setTimeAgo(`${minutes} minute${minutes > 1 ? "s" : ""} ago`);
        result = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (timeDifference < day) {
        const hours = Math.floor(timeDifference / hour);
        result = `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (timeDifference < month) {
        const days = Math.floor(timeDifference / day);
        result = `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (timeDifference < year) {
        const months = Math.floor(timeDifference / month);
        result = `${months} month${months > 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(timeDifference / year);
        result = `${years} year${years > 1 ? "s" : ""} ago`;
      }

      const timeString = formatTime(timestamp);
      setTimeAgo(`${result} at ${timeString}`);
    };

    updateTimeAgo();

    const interval = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return (
    <span className={cn("text-xs text-gray-400", className)}>{timeAgo}</span>
  );
};
