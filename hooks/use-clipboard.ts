"use client";

import { useState } from "react";

export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.log("Clipboard API not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return true;
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setIsCopied(false);
      return false;
    }
  };

  return { isCopied, copy };
}
