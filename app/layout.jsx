import Providers from "@/components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import dotenv from "dotenv";

dotenv.config();
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Budgete",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
