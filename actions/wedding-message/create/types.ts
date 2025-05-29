import * as z from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { WeddingMessage } from "@/app/generated/prisma";
import { CreateWeddingMessageSchema } from "./schema";

export type InputType = z.output<typeof CreateWeddingMessageSchema>;
export type ReturnType = ActionState<InputType, WeddingMessage>;
