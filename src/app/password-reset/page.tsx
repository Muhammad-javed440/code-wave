"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Handle email confirmation (simulate or connect to your backend API)
  const handleEmailConfirmation = async () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      // Simulate API request for password reset
      const res = await fetch("/api/auth/request-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert("Password reset email sent.");
        router.push("/verify-email");
      } else {
        alert("Failed to send reset email.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  // Handle sign in with Google
  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard" }); // redirect after login
    } catch (err) {
      console.error(err);
      alert("Google sign-in failed.");
    }
  };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-slate-200 rounded text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Email Address"
          required
        />

        <button
          onClick={handleEmailConfirmation}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Confirm Email
        </button>

        <div className="my-6 h-px bg-zinc-200" />

        <p className="text-center text-sm text-gray-500">
          Remember your Password?
        </p>

        <button
          onClick={handleSignIn}
          className="w-full mt-4 py-3 border border-zinc-200 text-blue-600 rounded hover:bg-gray-50 transition-colors"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default PasswordReset;
