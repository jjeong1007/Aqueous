import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aqueous",
    template: "%s · Aqueous",
  },
  description:
    "Aqueous is the internal design system for documenting and exploring UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full font-sans">
        <Sidebar />
        <div className="ml-56 flex min-h-dvh min-w-0 flex-1 flex-col bg-background-neutral">
          {children}
        </div>
      </body>
    </html>
  );
}
