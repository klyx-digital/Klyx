import { getPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import { Newsletter } from "./Newsletter";
import { CtaBlog } from "./CtaBlog";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  if (!Post) {
    return notFound();
  }

  return (
    <main>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <article className="prose prose-slate mx-auto ">
          <Post />
        </article>
      </div>
      <CtaBlog />
      <Newsletter />
    </main>
  );
}
