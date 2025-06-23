// src/components/SignUpForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"; // Adjust import
import { Input } from "@/components/ui/input"; // Assume you have an Input component
import { useRouter } from "next/navigation";

interface SignUpFormData {
  email: string;
  password: string;
}

export function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();
  const router = useRouter();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      // Example: Call your API route (e.g., /api/auth/sign-up)
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Sign-up successful");
        router.push("/dashboard");
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="mt-1 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          className="mt-1 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800">
        Sign Up
      </Button>
    </form>
  );
}