import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./(components)/nav";

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

      <body className={""}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
