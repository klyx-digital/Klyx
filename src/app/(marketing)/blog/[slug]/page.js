import { getPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import { Newsletter } from "./Newsletter";
import { CtaBlog } from "./CtaBlog";
import { RelatedPosts } from "./RelatedPosts";
import { ShareButtons } from "./ShareButtons";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const posts = await getPosts();
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Klyx",
      images: [post.imageUrl || `${BASE_URL}/default-og.jpg`],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.imageUrl || `${BASE_URL}/default-og.jpg`],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const allPosts = await getPosts();
  const currentPost = allPosts.find((post) => post.slug === slug);

  if (!currentPost) return notFound();

  const moreArticles = allPosts
    .filter(
      (post) => post.slug !== slug && post.category === currentPost.category
    )
    .slice(0, 3);

  let Post;
  try {
    const imported = await import(`@/content/blog/${slug}.mdx`);
    Post = imported.default;
  } catch (error) {
    return notFound();
  }

  const canonicalUrl = `${BASE_URL}/blog/${slug}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: currentPost.title,
    description: currentPost.description,
    datePublished: currentPost.date,
    url: canonicalUrl,
    image: currentPost.imageUrl ? [currentPost.imageUrl] : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  return (
    <main>
      {/* Add JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <article className="prose prose-slate mx-auto ">
          <Post />
        </article>
        <ShareButtons title={currentPost.title} url={canonicalUrl} />
      </div>
      <RelatedPosts posts={moreArticles} />
      <CtaBlog />
      <Newsletter />
    </main>
  );
}
