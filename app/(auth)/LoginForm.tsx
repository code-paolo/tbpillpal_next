"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/types/ValidationSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared-components/ui/form";
import { Input } from "@/shared-components/ui/input";
import { Button } from "@/shared-components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";

type LoginActionProp = {
  loginAction: () => Promise<{ success: boolean; message: string }>;
};

const LoginForm = (loginAction: LoginActionProp) => {
  const [togglePassword, setTogglePassword] = useState(false);
  type LoginProp = z.infer<typeof LoginSchema>;

  const loginForm = useForm<LoginProp>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = loginForm.handleSubmit((values) => {
    console.log(values);
  });
  return (
    <Form {...loginForm}>
      <h1 className="my-3  text-xl font-bold">Login to access the dashboard</h1>
      <form className="flex flex-col " onSubmit={submitLogin}>
        <FormField
          name="email"
          control={loginForm.control}
          render={({ field }) => (
            <FormItem className="my-2">
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  className="sm:w-[500px]"
                  {...field}
                  placeholder="johndoe@gmail.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={loginForm.control}
          render={({ field }) => (
            <FormItem className="my-2">
              <FormLabel className="text-lg">Password</FormLabel>
              <FormControl>
                <div className="relative sm:w-[500px]">
                  <Input
                    type={`${togglePassword ? "text" : "password"}`}
                    {...field}
                  />
                  {togglePassword ? (
                    <Eye
                      onClick={() => setTogglePassword(!togglePassword)}
                      className="cursor-pointer text-pillpalColor_main absolute right-3 top-2"
                      size={20}
                    />
                  ) : (
                    <EyeClosed
                      onClick={() => setTogglePassword(!togglePassword)}
                      className="cursor-pointer text-pillpalColor_main absolute right-3 top-2"
                      size={20}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-5 w-[100%] sm:w-[500px]">Login</Button>
        <Link
          href="/forgot-password"
          className="my-2 text-sm hover:underline text-pillpalColor_main"
        >
          Forgot password?
        </Link>
      </form>
    </Form>
  );
};

export default LoginForm;
