import { getPostBySlug, getPosts } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const metadata = {
  title: "Blog",
};

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <article className="prose prose-slate mx-auto">
        <header className="pb-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
        </header>
        <div
          className="mt-8 prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
