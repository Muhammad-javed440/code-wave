// File: app/dashboard/page.tsx
import { auth } from "@/lib/auth"; // custom wrapper for getServerSession
import { redirect } from "next/navigation";
// Update the import path to match the actual file name and extension, e.g.:
import HeroDashboard from "../components/HeroDashboard";
import ChatComponent from "../components/ChatComponent";
// Or, if the file is named 'HeroDashboard/index.tsx':
// import HeroDashboard from "@/components/HeroDashboard";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div>
      <HeroDashboard />
      <ChatComponent />
      {/* Add any other components or content you want to display on the dashboard */}
    </div>
  );
}
