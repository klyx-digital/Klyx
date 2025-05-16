// lib/content.ts
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/blog");

export async function getPosts() {
  const filesNames = await fs.readdir(postsDir);
  const posts = await Promise.all(
    filesNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        try {
          const slug = fileName.replace(/\.mdx$/, "");
          const filePath = path.join(postsDir, fileName);
          const fileContent = await fs.readFile(filePath, "utf-8");
          const { data } = matter(fileContent);

          return {
            id: slug,
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            imageUrl: data.imageUrl,
            category: data.category,
          };
        } catch (error) {
          return null;
        }
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug) {
  try {
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { content, metadata: data };
  } catch (error) {
    return null;
  }
}
