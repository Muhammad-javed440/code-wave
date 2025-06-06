"use client";
import Link from "next/link";
import React from "react";

function PasswordReset() {
  const handleEmailConfirmation = () => {};
  const handleSignIn = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-sm p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Password Reset
        </h1>
        <p className="text-center text-gray-500 mb-8">
          We will Help You Reset Your Password
        </p>

        <label className="block text-sm text-gray-500 mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 border border-slate-200 rounded text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Email Address"
          required
        />
        <Link href="/verify-email">
        <button
          onClick={handleEmailConfirmation}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Confirm Email
        </button>
        </Link>
        <div className="my-6 h-px bg-zinc-200" />

        <p className="text-center text-sm text-gray-500">
          Remember your Password?
        </p>
        <Link href="/login">
        <button
          onClick={handleSignIn}
          className="w-full mt-4 py-3 border border-zinc-200 text-blue-600 rounded hover:bg-gray-50 transition-colors"
        >
          Back to Sign In
        </button>
        </Link>
      </div>
    </div>
  );
}

export default PasswordReset;
