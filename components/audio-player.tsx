"use client";

// import { useEffect } from "react";

import { useAudioPlayer } from "@/hooks/use-audio-player";

// interface CustomWindow extends Window {
//   settingAutoplay?: boolean;
// }

export const AudioPlayer = () => {
  const { isPlaying, togglePlay } = useAudioPlayer(
    "/assets/music/Nyoman-Paul-The-Way-You-Look-At-Me.mp3",
  );

  //   useEffect(() => {
  //     (window as CustomWindow).settingAutoplay = true;
  //   }, []);

  return (
    <div className="fixed right-2.5 bottom-2.5 z-50 flex">
      <div
        className="animate-pulse rounded-full border-2 border-white bg-amber-300 p-2"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 fill-white stroke-white"
          >
            <rect x="14" y="4" width="4" height="16" rx="1" />
            <rect x="6" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 fill-white stroke-white"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        )}
      </div>
    </div>
  );
};
