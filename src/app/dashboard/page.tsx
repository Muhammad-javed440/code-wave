// File: app/dashboard/page.tsx
import { auth } from "@/lib/auth"; // custom wrapper for getServerSession
import { redirect } from "next/navigation";
// Update the import path to match the actual file name and extension, e.g.:
import HeroDashboard from "../components/HeroDashboard";
import ChatComponent from "../components/ChatComponent";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// Or, if the file is named 'HeroDashboard/index.tsx':
// import HeroDashboard from "@/components/HeroDashboard";

export default async function DashboardPage() {
  const session = await auth();

  console.log("Session in DashboardPage:", session?.user);
  // if (!session) {
  //   redirect("/auth/signin");
  // }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950">
      <HeroDashboard />
      {/* <ChatComponent /> */}
      {/* Add any other components or content you want to display on the dashboard */}

      <Link href="/chat" className="fixed cursor-pointer hover:bg-gray-200 p-2 rounded-full bottom-10 right-10 flex items-center justify-centers">
        <Image
    src="/gemini.webp"
    alt="Chat Bot"
    width={40}
    height={40}
    className="rounded-full"
  />
      </Link>
    </div>
  );
}
