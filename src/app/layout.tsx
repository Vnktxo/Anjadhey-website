import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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

        {/* 👇 ADD THIS ONE LINE RIGHT HERE 👇 */}
        <div id="portal-root"></div>
        
      </body>
    </html>
  );
}