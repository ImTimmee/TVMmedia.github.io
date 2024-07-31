import type { Metadata } from "next";
import { Inter, Anton, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "TVM Media",
  description: "TVM Media Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${anton.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
