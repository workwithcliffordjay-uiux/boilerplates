import dynamic from "next/dynamic";

import articlesData from "@/lib/static/preBuildScripts/articles.json";
import blogData from "@/lib/static/preBuildScripts/blog.json";

const CONTENT_TYPES = (process.env.NEXT_PUBLIC_CONTENT_TYPES || "")
  .split(",")
  .map((type) => type.trim())
  .filter(Boolean);

const DYNAMIC_COMPONENTS = {
  articles: dynamic(() => import("@/components/contents/ArticlePage")),
  blog: dynamic(() => import("@/components/contents/BlogPage")),
};

const CONTENT_SOURCES = {
  articles: articlesData?.articles || [],
  blog: blogData?.blog || [],
};

export const contents = Object.fromEntries(
  CONTENT_TYPES.filter((type) => DYNAMIC_COMPONENTS[type]).map((type) => [
    type,
    DYNAMIC_COMPONENTS[type],
  ]),
);

export const contentsByType = Object.fromEntries(
  CONTENT_TYPES.map((type) => [type, CONTENT_SOURCES[type] || []]),
);
