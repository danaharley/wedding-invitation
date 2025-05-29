import { WeddingMessage } from "@/app/generated/prisma";
import prisma from "./prisma";

export const getWeddingMessages = async (): Promise<
  WeddingMessage[] | null
> => {
  try {
    const messages = await prisma.weddingMessage.findMany({
      include: {
        user: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return messages;
  } catch (error) {
    console.log("GET_WEDDING_MESSAGES", error);
    return null;
  }
};
