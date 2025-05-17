import Link from "next/link";
import { Categories } from "./Categories";
import { Badge } from "@/components/ui/badge";
import { getPosts, getCategories } from "@/lib/content";
import { Select } from "@/components/ui/select";
import { Divider } from "@/components/ui/divider";

export const metadata = {
  title: "Blog",
  description:
    "Des conseils concrets, des analyses et des astuces pour booster votre visibilité, améliorer la performance de votre site et transformer votre présence digitale en véritable levier de croissance.",
};

export default async function Page({ params }) {
  const posts = await getPosts();

  const { category } = await params;
  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Le blog Klyx
          </h1>
          <p className="mt-2 text-lg/8 text-gray-600">
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full hover:scale-105 transition-all duration-300">
                <Link href={`/blog/${post.slug}`}>
                  <img
                    alt={post.title}
                    src={post.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                  />
                </Link>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset pointer-events-none" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={`/blog/categories/${post.category}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
