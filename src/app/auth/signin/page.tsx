"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginFormInputs = {
  username: string;
  password: string;
};

function LoginComponent() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: LoginFormInputs) => {
    const res = await signIn("credentials", {
      redirect: true,
      username: data.username,
      password: data.password,
    });

    if (res?.error) {
      setError("Invalid username or password.");
    } else {
      setError("");
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 shadow rounded-2xl">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mt-6">
            <Input
              id="username"
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="w-full"
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full"
              />
              <button
                type="button"
                className="ml-2 text-sm"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
            >
              Login
            </Button>
          </div>
        </form>

        <div className="mt-2">
          <Button
            variant="outline"
            className="w-full flex justify-center items-center py-3 rounded-md bg-black text-white hover:bg-indigo-800 transition"
            onClick={() => signIn("google", { callbackUrl: '/' })}
          >
            Login with Google
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Link href="/password-reset">
            <button className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </Link>
        </div>
        
       

        {error && (
          <div className="mt-4">
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        )}

        <div className="mt-6">
          <Alert>
            <AlertTitle>Need help?</AlertTitle>
            <AlertDescription>Contact support for assistance.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
