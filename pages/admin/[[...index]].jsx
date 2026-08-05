import Head from "next/head";
import dynamic from "next/dynamic";

import config from "../../sanity.config";

const NextStudio = dynamic(
  () =>
    import("next-sanity/studio/client-component").then((mod) => mod.NextStudio),
  { ssr: false },
);

export default function AdminPage() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <NextStudio config={config} />
    </>
  );
}
