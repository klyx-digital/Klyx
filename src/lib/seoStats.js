import prisma from "@/lib/prisma";
import { subDays } from "date-fns";

/**
 * Retourne les stats SEO 30 derniers jours pour un site
 */
export async function getSeoStats(siteUrl) {
  const start = subDays(new Date(), 30);

  const agg = await prisma.searchAnalyticsDay.aggregate({
    where: { siteUrl, date: { gte: start } },
    _sum: { clicks: true, impressions: true },
    _avg: { position: true },
  });

  const clicks = agg._sum.clicks ?? 0;
  const impr = agg._sum.impressions ?? 0;
  const ctr = impr ? clicks / impr : 0;
  const pos = agg._avg.position ?? 0;

  return { clicks, impressions: impr, ctr, position: pos.toFixed(1) };
}
