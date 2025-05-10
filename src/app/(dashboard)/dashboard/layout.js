import { ApplicationLayout } from "./ApplicationLayout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return <ApplicationLayout session={session}>{children}</ApplicationLayout>;
}
