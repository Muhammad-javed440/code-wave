"use client"
import React from "react";

function EmailConfirmationForm() {
  const handleConfirmation = () => {};

  const handleResendCode = () => {};

  return (
<div className="flex flex-col px-10 py-14 text-base leading-6 bg-white shadow-sm max-w-[540px] w-full rounded-xl
                mx-auto
                max-md:px-5 max-md:py-10">
  <div className="self-center text-3xl font-bold leading-10 text-center text-gray-900">
    Confirm Email
  </div>
  <div className="flex gap-2 self-center mt-6 text-center px-4 max-w-[90vw]">
    <div className="text-gray-500">
      Check Your Email and Enter Confirmation Code
    </div>
  </div>
  <div className="mt-12 text-sm leading-5 text-gray-500 max-md:mt-10 px-4 max-w-[90vw]">
    Confirmation Code
  </div>
  <input
    type="text"
    className="mt-2.5 bg-white rounded border border-solid border-slate-200 text-slate-400 px-4 py-5 w-full max-w-[90vw] max-md:px-3"
    placeholder="Enter Code"
    required
  />
  <button
    className="px-16 py-5 mt-6 text-white bg-blue-600 rounded w-full max-w-[90vw] max-md:px-5 max-md:py-4"
    onClick={handleConfirmation}
  >
    Confirm Email
  </button>
  <div className="mt-7 h-px bg-zinc-200" />
  <div className="self-center mt-7 text-sm leading-5 text-center text-gray-500 px-4 max-w-[90vw]">
    Have not received your code?
  </div>
  <button
    className="flex justify-center items-center px-16 py-3 mt-7 text-blue-600 bg-white rounded border border-solid border-zinc-200 w-full max-w-[90vw] max-md:px-5 max-md:py-3"
    onClick={handleResendCode}
  >
    Resend Code
  </button>
</div>

  );
}

export default EmailConfirmationForm;
