import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "@/components/ui/authprovider/Providers";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeWave AI - Next Generation Development",
  description: "Professional web development and AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AuthProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="min-h-screen flex flex-col">
            
              <main className="flex-1">
                {children}
              </main>
            
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
