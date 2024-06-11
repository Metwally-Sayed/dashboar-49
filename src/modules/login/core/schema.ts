import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Required"),
  password: z.string().min(6, "Password should be 6 characters"),
});
