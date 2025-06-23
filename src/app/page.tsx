import React from "react";
import Hero from "./components/Hero";
import Name from "./components/Name";
import VantaBackground from "@/components/VantaBackground";
export default function Home() {
  return (
    <div className="relative min-h-screen">
    
      <div className="relative z-10">
        <Name/>
        <Hero/>
      </div>
    </div>
  );
}
