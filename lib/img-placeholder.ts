"use server";

import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const bufferToBase64 = (buffer: Buffer): string => {
  return `data:image/png;base64,${buffer.toString("base64")}`;
};

const getFileBufferLocal = async (filepath: string) => {
  // filepath is file addess exactly how is used in Image component (/ = public/)
  const realFilepath = path.join(process.cwd(), "public", filepath);
  return fs.readFile(realFilepath);
};

const getFileBufferRemote = async (url: string) => {
  const response = await fetch(url);
  return Buffer.from(await response.arrayBuffer());
};

const getFileBuffer = (src: string) => {
  const isRemote = src.startsWith("http");
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src);
};

export const getPlaceholder = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBuffer(filepath);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();

    return {
      src: filepath,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch {
    return {
      src: filepath,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==",
    };
  }
};
