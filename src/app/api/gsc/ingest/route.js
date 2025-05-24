import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ingestLast30Days } from "@/lib/gsc/ingest";

export async function GET() {
  // 1. Charger tous les sites actifs avec leur user
  const sites = await prisma.site.findMany({
    include: { user: { select: { id: true, email: true } } },
  });

  let totalRows = 0;

  // 2. Boucler sur chaque site
  for (const s of sites) {
    const inserted = await ingestLast30Days(s.user.id, s.url);
    totalRows += inserted;
  }

  return NextResponse.json({ imported: totalRows });
}
