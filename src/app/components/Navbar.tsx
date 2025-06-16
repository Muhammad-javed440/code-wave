"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out z-50 ${
            isOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/blogs" className="hover:text-gray-900">
            Blogs
          </Link>
          <Link href="/services" className="hover:text-gray-900">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
