"use client";
import React, { useRef } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";
import Link from "next/link";

function CreateAccount() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleCreateAccount = () => {
    const emailInput = emailRef.current;
    const passwordInput = passwordRef.current;

    if (!emailInput || !passwordInput) {
      alert("Unexpected error: missing input fields.");
      return;
    }

    const isEmailValid = emailInput.checkValidity();
    const isPasswordValid = passwordInput.value.trim().length >= 6;

    if (!isEmailValid) {
      alert("Please enter a valid email address.");
    } else if (!isPasswordValid) {
      alert("Password must be at least 6 characters long.");
    } else {
      alert("Create account logic placeholder");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}`);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  const handleGitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName || user.email}`);
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
      alert("Failed to sign in with GitHub.");
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}`);
    } catch (error) {
      console.error("Facebook Sign-In Error:", error);
      alert("Failed to sign in with Facebook.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          Create an Account
        </h2>

        <div className="flex justify-center gap-1 text-sm text-gray-600 mt-4">
          <span>Have an account?</span>
          <Link href="/login">
          <button className="text-indigo-600 hover:underline" onClick={() => {}}>
            Sign In
          </button>
          </Link>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email Address"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Create Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleCreateAccount}
          className="w-full py-3 mt-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-800 transition"
        >
          Create Account
        </button>

        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center items-center py-3 rounded-md bg-black text-white hover:bg-indigo-800 transition"
          >
            Sign in with Google
          </button>

          <button
            onClick={handleGitHubSignIn}
            className="w-full flex justify-center items-center py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-800 transition"
          >
            Sign in with GitHub
          </button>

          <button
            onClick={handleFacebookSignIn}
            className="w-full flex justify-center items-center py-3 rounded-md bg-black text-white hover:bg-indigo-800 transition"
          >
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
