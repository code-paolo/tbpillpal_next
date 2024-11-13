import z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "The email address field is required")
    .email("Please Enter a valid email address"),
  password: z.string().min(1, "The password field is required"),
});

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "The email address field is required")
    .email("Please Enter a valid email address"),
});
