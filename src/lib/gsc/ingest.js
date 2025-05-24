import { subDays, formatISO } from "date-fns";
import prisma from "@/lib/prisma";
import { getValidGscClient } from "./getValidClient.js";

export async function ingestLast30Days(userId, siteUrl) {
  const end = subDays(new Date(), 2);
  const start = subDays(end, 29);

  const client = await getValidGscClient(userId);
  const res = await client.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: formatISO(start, { representation: "date" }),
      endDate: formatISO(end, { representation: "date" }),
      dimensions: ["date"],
      rowLimit: 1000,
    },
  });

  const rows = res.data.rows ?? [];
  for (const row of rows) {
    const [dateStr] = row.keys;
    await prisma.searchAnalyticsDay.upsert({
      where: { siteUrl_date: { siteUrl, date: new Date(dateStr) } },
      create: {
        siteUrl,
        date: new Date(dateStr),
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position,
      },
      update: {
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position,
      },
    });
  }
  return rows.length;
}
