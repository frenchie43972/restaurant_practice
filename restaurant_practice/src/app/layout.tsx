import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "A Little Bit Chowder Now",
  description: "Restaurant in both English and Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
