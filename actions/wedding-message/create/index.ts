"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/create-safe-action";
import { getUserById } from "@/lib/user";

import { InputType, ReturnType } from "./types";
import { CreateWeddingMessageSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, message } = data;

  const user = await getUserById(userId);

  if (!user) {
    return {
      error: "Kamu tidak masuk list undangan.",
    };
  }

  let result;

  try {
    result = await prisma.weddingMessage.create({
      data: {
        userId: user.id,
        message,
      },
    });
  } catch (error) {
    console.log("CREATE_WEDDING_MESSAGE", error);

    return {
      error: "Failed to create wedding message.",
    };
  }

  revalidatePath(`bdh?to=${user.name}`);

  return { data: result };
};

export const createWeddingMessage = createSafeAction(
  CreateWeddingMessageSchema,
  handler,
);
