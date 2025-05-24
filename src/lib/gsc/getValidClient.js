import { google } from "googleapis";
import prisma from "@/lib/prisma";

export async function getValidGscClient(userId) {
  const tokenRow = await prisma.oAuthToken.findUnique({
    where: { userId_provider: { userId, provider: "gsc" } },
  });
  if (!tokenRow) throw new Error("No GSC token for this user");

  const oauth2 = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET,
    process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
  );
  oauth2.setCredentials({
    access_token: tokenRow.accessToken,
    refresh_token: tokenRow.refreshToken,
    expiry_date: tokenRow.expiresAt.getTime(),
  });

  // rafraîchir si moins d’1 min avant expiration
  const ONE_MIN = 60 * 1000;
  if (Date.now() > tokenRow.expiresAt.getTime() - ONE_MIN) {
    const { credentials } = await oauth2.refreshAccessToken();
    await prisma.oAuthToken.update({
      where: { id: tokenRow.id },
      data: {
        accessToken: credentials.access_token,
        refreshToken: credentials.refresh_token ?? tokenRow.refreshToken,
        expiresAt: new Date(credentials.expiry_date),
      },
    });
  }

  return google.searchconsole({ version: "v1", auth: oauth2 });
}
