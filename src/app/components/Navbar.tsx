
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
  <header className="text-gray-600 bg-gray-100 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-2xl">CodeWave AI</span>
      </a>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center space-x-4 text-base">
        <Link href="/" className="hover:text-gray-900 ">Home</Link>
        <Link href="/about" className="hover:text-gray-900">About</Link>
        <Link href="/blogs" className="hover:text-gray-900">Blogs</Link>
        <Link href="/services" className="hover:text-gray-900">Services</Link>
        <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
      </nav>

      {/* Buttons */}
      <div className="flex mt-4 md:mt-0 space-x-2">
        <Link href="/sign-up">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
            Sign-Up
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
        <Link href="/login">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </header>
</div>

  )
}

export default Navbar