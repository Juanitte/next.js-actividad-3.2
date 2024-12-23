import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuPrincipal from "@/components/menu-principal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased h-screen bg-white flex leading-4`} >
        <MenuPrincipal />
        <main className="mx-2 pb-6 grow  overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
