import * as z from "zod";

export const projectSchema = z.object({
  title: z.string().min(3).max(32),
  description: z.string().min(3).max(32),
  img: z.string().min(1),
  time: z.string().min(1).max(32),
  client: z.string().min(1).max(32),
  repo: z.string().min(1).max(32),
  site: z.string().min(1).max(32),
  tags: z.array(z.string().min(1).max(32)),
  role: z.array(z.string().min(1).max(32)),
});
