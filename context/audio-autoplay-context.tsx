"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface CustomWindow extends Window {
  settingAutoplay?: boolean;
}

type AudioAutoplayContextType = {
  autoplay: boolean;
};

const AudioAutoplayContext = createContext<AudioAutoplayContextType>({
  autoplay: false,
});

export function AudioAutoplayProvider({ children }: { children: ReactNode }) {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const setting = (window as CustomWindow).settingAutoplay;
      setAutoplay(Boolean(setting));
    }
  }, []);

  return (
    <AudioAutoplayContext.Provider value={{ autoplay }}>
      {children}
    </AudioAutoplayContext.Provider>
  );
}

export function useAudioAutoplay() {
  return useContext(AudioAutoplayContext);
}
