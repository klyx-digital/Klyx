"use client";

import { Button } from "@/components/ui/button";

export function ButtonGSC({ session }) {
  const handleConnectGSC = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    const userId = session.user.id;

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
      include_granted_scopes: "true",
      state: userId,
    });

    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString();
  };

  return (
    <Button onClick={handleConnectGSC} className="hover:cursor-pointer">
      Connecter Google Search Console
    </Button>
  );
}
