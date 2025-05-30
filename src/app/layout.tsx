import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Login from "./components/login";
import Search from "./components/search";
import Footer from "./components/footer";
import { AppWrapper } from "@/context/ContextAPI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bin Saeedfabric",
  description: "bin saeedfabric.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Mont.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppWrapper>
          <div className="min-h-screen  flex flex-col justify-between max-w-[1900px] mx-auto">
            <div>
              <Header />
              <Login />
              <Search />

              <main>{children}</main>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
