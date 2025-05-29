import * as z from "zod";

export const CreateWeddingMessageSchema = z.object({
  userId: z.number(),
  message: z.string(),
});
