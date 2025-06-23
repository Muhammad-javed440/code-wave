// app/admin/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

type AdminUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
};

type AdminSession = {
  user?: AdminUser;
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions) as AdminSession;

  // ❌ Not logged in
  if (!session) {
    return redirect("/auth/signin");
  }

  // ❌ Not an admin
  if (!session.user || session.user.role !== "admin") {
    return redirect("/unauthorized");
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}
