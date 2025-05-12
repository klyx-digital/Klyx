import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return <DashboardLayout session={session}>{children}</DashboardLayout>;
}
