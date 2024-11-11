// import Head from 'next/head';
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import PartyTownScripts from "./components/PartyTownScripts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PartyTownScripts/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}


