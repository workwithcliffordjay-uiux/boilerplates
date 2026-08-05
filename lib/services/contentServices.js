import dynamic from "next/dynamic";

import { getArticles, getBlogPosts } from "@/sanity/sanity-utils";

const CONTENT_TYPES = (process.env.NEXT_PUBLIC_CONTENT_TYPES || "")
  .split(",")
  .map((type) => type.trim())
  .filter(Boolean);

const DYNAMIC_COMPONENTS = {
  articles: dynamic(() => import("@/components/contents/ArticlePage")),
  blog: dynamic(() => import("@/components/contents/BlogPage")),
};

const CONTENT_FETCHERS = {
  articles: getArticles,
  blog: getBlogPosts,
};

export const contents = Object.fromEntries(
  CONTENT_TYPES.filter((type) => DYNAMIC_COMPONENTS[type]).map((type) => [
    type,
    DYNAMIC_COMPONENTS[type],
  ]),
);

export async function getContentsByType() {
  const activeTypes = CONTENT_TYPES.filter((type) => CONTENT_FETCHERS[type]);

  const entries = await Promise.all(
    activeTypes.map(async (type) => [type, (await CONTENT_FETCHERS[type]()) || []]),
  );

  return Object.fromEntries(entries);
}
