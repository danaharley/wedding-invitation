import { useEffect, useRef, useState, useCallback } from "react";

import { useAudioAutoplay } from "@/context/audio-autoplay-context";

export function useAudioPlayer(src: string, loop = true) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { autoplay } = useAudioAutoplay();

  // Init audio
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      const audio = new Audio(src);
      audio.loop = loop;
      audio.muted = true; // start muted to allow autoplay
      audioRef.current = audio;
    }
  }, [src, loop]);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        audio.muted = false;
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("Play failed:", err);
      });
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          audio.muted = false;
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Play failed:", err);
        });
    }
  }, [isPlaying]);

  // Try autoplay
  useEffect(() => {
    if (autoplay && audioRef.current) {
      start();
    }
  }, [autoplay, start]);

  return {
    isPlaying,
    start,
    togglePlay,
  };
}
