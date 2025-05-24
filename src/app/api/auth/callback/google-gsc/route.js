import { NextResponse } from "next/server";
import { google } from "googleapis";
import prisma from "@/lib/prisma";
import { auth } from "@/auth"; // getServerSession v5

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "missing code" }, { status: 400 });
  }

  // 1. Vérifier l’utilisateur connecté
  const session = await auth(); // NextAuth v5 helper
  if (!session?.user?.id) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }
  const userId = session.user.id;

  // 2. Construire l’OAuth2 client (uses same credentials as NextAuth)
  const oauth2 = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET,
    process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
  );

  // 3. Échanger le code
  let tokenResponse;
  try {
    // oauth2 client a déjà la redirectUri; on passe juste le code
    tokenResponse = await oauth2.getToken(code);
  } catch (err) {
    console.error(
      "GSC token exchange error:",
      err.response?.data || err.message
    );
    return NextResponse.json(
      {
        error: "token_exchange_failed",
        details: err.response?.data || err.message,
      },
      { status: 400 }
    );
  }
  const { access_token, refresh_token, scope, expiry_date } =
    tokenResponse.tokens;

  // 4. Upsert en base
  await prisma.oAuthToken.upsert({
    where: { userId_provider: { userId, provider: "gsc" } },
    create: {
      provider: "gsc",
      userId,
      accessToken: access_token,
      refreshToken: refresh_token ?? null,
      scope: scope ?? "https://www.googleapis.com/auth/webmasters.readonly",
      expiresAt: expiry_date
        ? new Date(expiry_date)
        : new Date(Date.now() + 3500 * 1000),
    },
    update: {
      accessToken: access_token,
      // n'écrase pas l'ancien refresh_token si Google n'en renvoie pas
      refreshToken: refresh_token ?? undefined,
      scope: scope ?? undefined,
      expiresAt: expiry_date
        ? new Date(expiry_date)
        : new Date(Date.now() + 3500 * 1000),
    },
  });

  // Stocker les credentials dans l'instance OAuth2 pour les requêtes suivantes
  oauth2.setCredentials({
    access_token,
    refresh_token,
  });

  // 5. Récupérer la liste des propriétés GSC de l'utilisateur
  const { data } = await oauth2.request({
    url: "https://searchconsole.googleapis.com/webmasters/v3/sites",
  });
  const sites = data.siteEntry || [];

  // A. Si aucune propriété trouvée ➜ redirige avec message d'erreur
  if (!sites.length) {
    return NextResponse.redirect(new URL("/dashboard?err=no-site", req.url));
  }

  // B. Sérialiser la liste pour la page de choix
  const sitesParam = encodeURIComponent(JSON.stringify(sites));

  return NextResponse.redirect(
    new URL(`/dashboard/choose-site?sites=${sitesParam}`, req.url)
  );
}
