import React from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with its children */}
      
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}