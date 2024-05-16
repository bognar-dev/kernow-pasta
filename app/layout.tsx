import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kernow Pasta",
  description: "Savor Cornwall, One Pasta at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
