import Providers from "@/components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import dotenv from "dotenv";
import Navigation from "@/components/Navigation";

dotenv.config();
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Budgete",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <head></head>

        <body className={inter.className}>
          {/* <main className="w-full h-screen mx-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-5 dark:bg-gray-800 dark:border-gray-700"> */}
          {children}
          {/* </main> */}
          {/* <Navigation /> */}
        </body>
      </Providers>
    </html>
  );
}
