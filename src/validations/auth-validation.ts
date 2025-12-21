import z from "zod";

export const loginSchemaForm = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("please enter a valid email"),
  password: z.string().min(1, "password is required"),
});

export const createUserSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("please enter a valid email"),
  password: z.string().min(1, "password is required"),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  // avatar_url: z.union([
  //   z.string().min(1, "Image URL is required"),
  //   z.instanceof(File),
  // ]),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;
export type CreateUserForm = z.infer<typeof createUserSchema>;
