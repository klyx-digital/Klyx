import { getPosts } from "@/lib/content";
import { Categories } from "../../Categories.jsx";
import { Divider } from "@/components/ui/divider";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const posts = await getPosts();
  const { categories: category } = await params;

  const matchingPosts = posts.filter((post) => post.category === category);
  const description = `Tous les articles dans la catégorie ${category}`;

  return {
    title: `Articles – ${category}`,
    description,
  };
}

export default async function Page({ params }) {
  const posts = await getPosts();
  const { categories: category } = await params;
  const filtered = posts.filter((post) => post.category === category);

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Le blog Klyx
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Des conseils concrets, des analyses et des astuces pour booster
            votre visibilité, améliorer la performance de votre site et
            transformer votre présence digitale en véritable levier de
            croissance.
          </p>
        </div>
        <div className="mt-4 block lg:hidden">
          <Categories selected={category} />
          <Divider />
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {filtered.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="shrink-0">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a
                      href={`/blog/categories/${post.category}`}
                      className="hover:underline"
                    >
                      {post.category}
                    </a>
                  </p>
                  <a href={`/blog/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
