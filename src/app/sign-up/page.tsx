import * as React from "react";

const CreateAccount = () => {
  const handleCreateAccount = () => {
    const emailInput = document.querySelector('input[type="email"]');
    if (
      emailInput &&
      emailInput instanceof HTMLInputElement &&
      emailInput.checkValidity()
    ) {
      alert("Create account logic placeholder");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-sm rounded-xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          Create an Account
        </h2>

        <label className="block mt-8 text-sm font-medium text-gray-500">
          Email
        </label>
        <input
          type="email"
          className="w-full mt-2 px-4 py-3 border border-slate-200 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Email Address"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          required
        />

        <label className="block mt-6 text-sm font-medium text-gray-500">
          Password
        </label>
        <input
          type="password"
          className="w-full mt-2 px-4 py-3 border border-slate-200 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Create Password"
          required
        />

        <button
          onClick={handleCreateAccount}
          className="w-full mt-8 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
        >
          Create Account
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          By creating an account, you agree to our
        </p>
        <p className="text-sm text-center text-gray-500">
          <a href="/terms-of-service" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
        </p>

        <div className="mt-6 h-px bg-zinc-200" />
      </div>
    </div>
  );
};

export default CreateAccount;
