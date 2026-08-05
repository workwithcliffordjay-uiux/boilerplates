import Head from "next/head";
import { useRouter } from "next/router";
import tenantDetails from "@/lib/static/preBuildScripts/tenantDetails.json";

const defaultMeta = tenantDetails?.data?.main || {};

const siteName =
  defaultMeta?.title || process.env.NEXT_PUBLIC_APP_NAME || "Saekyung Village";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://saekyungvillage.com";

const siteLocale = "en_PH";
const twitterHandle = null;

export default function Header({ meta = {} }) {
  const router = useRouter();

  const resolvedPath = router.asPath.split("?")[0].split("#")[0];
  const url = new URL(resolvedPath, siteUrl).toString();

  const title = meta.title || defaultMeta.title || siteName;
  const fullTitle = `${title} | ${siteName}`;

  const description = meta.description || defaultMeta.description || siteName;

  const author =
    meta.author || defaultMeta.author || process.env.NEXT_PUBLIC_APP_NAME;

  const keywords =
    meta.keywords || defaultMeta.keywords || process.env.NEXT_PUBLIC_APP_NAME;

  const image = meta.image
    ? new URL(meta.image, siteUrl).toString()
    : defaultMeta.image
      ? new URL(defaultMeta.image, siteUrl).toString()
      : `${siteUrl}/favicon.ico`;

  const type = meta.type || "website";
  const noindex = meta.noindex || false;

  const imageType = () => {
    const ext = image.split(".").pop()?.toLowerCase();

    switch (ext) {
      case "png":
        return "image/png";
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      case "webp":
        return "image/webp";
      case "gif":
        return "image/gif";
      default:
        return "image/jpeg";
    }
  };

  return (
    <Head>
      <title>{fullTitle}</title>

      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />

      {/* Basic SEO */}
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={siteLocale} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content={imageType()} />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:domain" content={url} />
    </Head>
  );
}
