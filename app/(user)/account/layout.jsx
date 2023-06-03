import { Inter } from "next/font/google";

import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Budgete",
};

export default function RootLayout({ children }) {
  return (
    <>
      <main className="w-full h-screen mx-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-5 dark:bg-gray-800 dark:border-gray-700">
        {children}
      </main>
      <Navigation />
    </>
  );
}
