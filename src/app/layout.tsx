import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Wheel of Tech Stack",
  description: "A fun way to choose a tech stack and idea for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#000000] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
