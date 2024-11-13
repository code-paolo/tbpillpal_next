"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared-components/ui/form";
import { ForgotPasswordSchema } from "@/types/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared-components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared-components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
const ForgotPassword = () => {
  type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>;
  const forgotPasswordForm = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const submitEmailCode = forgotPasswordForm.handleSubmit((values) => {
    console.log(values);
  });
  return (
    <Form {...forgotPasswordForm}>
      <h1 className="my-2 text-xl font-bold">Forgot Password</h1>
      <form onSubmit={submitEmailCode} className="flex flex-col">
        <FormField
          name="email"
          control={forgotPasswordForm.control}
          render={({ field }) => (
            <FormItem className="sm:w-[500px]">
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="johndoe@gmail.com" />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Enter the email address associated with the account you want to
                recover
              </FormDescription>
            </FormItem>
          )}
        />
        <Button className="my-3 sm:w-[500px]">Send recovery code</Button>
        <Link
          href="/"
          className="my-2 text-sm hover:underline text-pillpalColor_main"
        >
          Go back to login
        </Link>
      </form>
    </Form>
  );
};

export default ForgotPassword;
