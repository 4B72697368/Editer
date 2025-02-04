import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Ad Verbum",
  description: "The word processor made for Debaters, by Debaters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
