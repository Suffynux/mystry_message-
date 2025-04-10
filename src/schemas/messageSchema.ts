import { z } from "zod";

export const messageSchema = z.object({
  messageContent: z.string().min(10, "Message must be atleast 10 character"),
});
