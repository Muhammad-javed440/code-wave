// src/components/SignUpButton.tsx
"use client";

import { Button } from "@/components/ui/button"; // Adjust import based on your UI library
import { useRouter } from "next/navigation";

interface SignUpButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function SignUpButton({ className, children }: SignUpButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Example: Navigate or perform action
    console.log("Sign up button clicked");
    router.push("/dashboard"); // Adjust as needed
  };

  return (
    <Button onClick={handleClick} className={className}>
      {children}
    </Button>
  );
}