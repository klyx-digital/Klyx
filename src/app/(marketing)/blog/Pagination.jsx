import { getPosts } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const postsPerPage = 12;

export async function Pagination({ page, category }) {
  function url(p) {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (p > 1) params.set("page", p.toString());
    return params.toString() ? `/blog?${params}` : "/blog";
  }

  // 1) Récupère le tableau puis calcule la longueur
  const posts = await getPosts(category);
  const totalPosts = posts.length;

  // 2) Calcul des bornes et URLs
  const pageCount = Math.ceil(totalPosts / postsPerPage);
  // if (pageCount < 2) return null;

  const hasPrevious = page > 1;
  const hasNext = page < pageCount;
  const previousPageUrl = hasPrevious ? url(page - 1) : undefined;
  const nextPageUrl = hasNext ? url(page + 1) : undefined;

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button href={previousPageUrl} disabled={!hasPrevious} outline>
        <ChevronLeftIcon className="size-4" /> Précédent
      </Button>

      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-hover:bg-gray-100",
              "data-active:shadow-sm data-active:ring-1 data-active:ring-black/10",
              "data-active:data-hover:bg-gray-50"
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>

      <Button href={nextPageUrl} disabled={!hasNext} outline>
        Suivant <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}
