import { getPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import { Newsletter } from "./Newsletter";
import { CtaBlog } from "./CtaBlog";
import { RelatedPosts } from "./RelatedPosts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const posts = await getPosts();
  try {
    const { slug } = await params;
    const post = posts.find((post) => post.slug === slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch (error) {
    return {
      title: "Article introuvable",
      description: "Cet article n'existe pas ou a été supprimé.",
    };
  }
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

  return (
    <main>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <article className="prose prose-slate mx-auto ">
          <Post />
        </article>
      </div>
      <RelatedPosts posts={moreArticles} />
      <CtaBlog />
      <Newsletter />
    </main>
  );
}
