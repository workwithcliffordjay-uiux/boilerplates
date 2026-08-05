import { PortableText } from "@portabletext/react";

export default function ArticlePage({ page }) {

  return (
    <article className="container mx-auto">
      <h2 className="text-2xl font-semibold">{page.title}</h2>
      {page.date && <p className="text-sm text-gray-500 mb-4">{page.date}</p>}

      {page.content && <PortableText value={page.content} />}
    </article>
  );
}
