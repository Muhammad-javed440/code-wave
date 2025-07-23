"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode"; // adjust the import path

const Name = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <header className="text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 shadow-sm">
      <div className="max-w-screen-lg mx-auto px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src="/logo.jpg"
            alt="CodeWave AI Logo"
            width={32}
            height={32}
            className="rounded-full shrink-0"
            priority
          />
          <Link
            href="/"
            className="truncate text-base sm:text-xl font-semibold text-gray-900 dark:text-white"
          >
            CodeWave AI
          </Link>
        </div>

        {/* Right: Desktop View */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/auth/signin">
            <button className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-sm sm:text-base">
              Login
            </button>
          </Link>
          <Link href="/auth/sign-up">
            <button className="text-indigo-500 border border-indigo-500 hover:bg-indigo-100 dark:hover:bg-gray-800 px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-sm sm:text-base">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Right: Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 animate-fadeIn">
          <Link href="/auth/signin">
            <button className="w-full text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">
              Login
            </button>
          </Link>
          <Link href="/auth/sign-up">
            <button className="w-full text-indigo-500 border border-indigo-500 hover:bg-indigo-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md text-sm">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Name;
