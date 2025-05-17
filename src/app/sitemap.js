// src/app/sitemap.js
import { getPosts } from "@/lib/content";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://klyxdigital.fr";

  // 1. Pages statiques
  const staticPaths = ["", "pricing", "why-klyx", "contact", "blog"].map(
    (path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: new Date().toISOString(),
    })
  );

  // 2. Articles de blog
  const posts = await getPosts();
  const postPaths = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticPaths, ...postPaths];
}
