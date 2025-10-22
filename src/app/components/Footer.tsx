import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center">
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

        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 w-full sm:w-auto text-center sm:text-left">
          © 2025 CodeWave —
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Muhammad-javed
          </a>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start w-full sm:w-auto space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=61578082611982"
            className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-javed-383914200/"
            className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
