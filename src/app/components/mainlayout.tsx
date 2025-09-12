import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anjadhey Foundation",
  description: "Together, We Protect Humanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-800 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-16">
          {" "}
          {/* pt-16 to offset fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
