import { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login | TBPillPal",
  description: "Access the TBPillpal dashboard",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="sm:flex sm:flex-row flex flex-col-reverse  w-screen justify-center items-center gap-3">
      <section className=" sm:h-screen w-screen p-2 pt-[50px] sm:pt-[150px]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-medium text-xl sm:text-2xl">TBPillPal</h1>
          <p className="font-light text-lg">
            Your tuberculosis treatment companion
          </p>
          <Image
            src="/lottielogin.gif"
            height={500}
            width={500}
            alt="Cute GIF"
            draggable="false"
            priority
          />
        </div>
      </section>
      <section className="flex justify-center items-center sm:pb-[200px] flex-col w-screen p-2">
        <Image
          alt="TBPillPal Logo"
          height={250}
          width={250}
          src="/pillpal_nobg.png"
          draggable="false"
        />
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
