"use client";

import { SignUpForm } from "../components/SignUpForm";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 shadow rounded-2xl">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
          Sign Up
        </h1>
        <div className="mt-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
