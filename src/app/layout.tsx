import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./(components)/nav";
import ScrollProgress from "./(components)/scroll-progress";

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
    <html lang="en" className={"scrollbar-hide"}>

      <body className={"scrollbar-hide"}>
        <NavBar />
        <ScrollProgress />
        {children}
        </body>
    </html>
  );
}
