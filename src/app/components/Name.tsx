"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Name = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 bg-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="CodeWave AI Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <Link href="/" className="text-2xl font-semibold text-gray-900">
            CodeWave AI
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="/auth/signin">
            <button className="text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-lg">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="text-indigo-500 border border-indigo-500 hover:bg-indigo-100 px-6 py-2 rounded-lg text-lg">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/auth/signin">
            <button className="w-full text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-base">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="w-full text-indigo-500 border border-indigo-500 hover:bg-indigo-100 px-4 py-2 rounded-lg text-base">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Name;
