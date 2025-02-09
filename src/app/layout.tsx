import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-jakarta",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Happy birthday, Widad",
  description: "A birthday website for Widad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
