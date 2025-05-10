// middleware.js

import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Liste des routes qui doivent être protégées (accès seulement si connecté)
const protectedRoutes = ["/dashboard"];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth?.user;
  const path = nextUrl.pathname;

  // 1. Rediriger vers /login si utilisateur non connecté essaye d'aller sur /dashboard
  if (protectedRoutes.some((route) => path.startsWith(route))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
  }

  // 2. Rediriger vers /dashboard si utilisateur déjà connecté va sur /login ou /register
  if (isLoggedIn && ["/login", "/register", "/"].includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Laisser passer toutes les autres requêtes
  return NextResponse.next();
});

// Configuration des routes auxquelles ce middleware s'applique
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
