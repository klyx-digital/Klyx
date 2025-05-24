import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function POST(req) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "unauth" }, { status: 401 });

  const { url } = await req.json();
  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 });

  await prisma.site.upsert({
    where: { url_userId: { url, userId: session.user.id } },
    create: { url, userId: session.user.id },
    update: {},
  });

  return NextResponse.json({ linked: url });
}
