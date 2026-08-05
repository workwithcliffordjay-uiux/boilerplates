import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-10",
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      stack,
      link,
      isFeatured,
      category
    }`,
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonials" && status == "approved"] | order(_createdAt desc){
      _id,
      projectName,
      name,
      message,
      status,
      isFeatured
    }`,
  );
}

export async function getArticles() {
  return client.fetch(
    groq`*[_type == "article"] | order(date desc){
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      author,
      date,
      content,
      isFeatured,
      seo
    }`,
  );
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      author,
      date,
      content,
      isFeatured,
      seo
    }`,
    { slug },
  );
}

export async function getBlogPosts() {
  return client.fetch(
    groq`*[_type == "blogPost"] | order(date desc){
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      author,
      date,
      content,
      categories,
      isFeatured,
      seo
    }`,
  );
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      author,
      date,
      content,
      categories,
      isFeatured,
      seo
    }`,
    { slug },
  );
}
