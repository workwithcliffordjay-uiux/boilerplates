import AboutPage from "../../components/pages/AboutPage";
import ContactPage from "../../components/pages/ContactPage";
import ServicesPage from "../../components/pages/ServicesPage";

import DefaultLayout from "../../components/_layout/DefaultLayout";

import { contents, getContentsByType } from "@/lib/services/contentServices";

const PAGES = {
  about: AboutPage,
  contact: ContactPage,
  services: ServicesPage,
};

const ALLOWED_PAGES = Object.keys(PAGES);
const ALLOWED_CONTENT_TYPES = Object.keys(contents);

export async function getStaticPaths() {
  const contentsByType = await getContentsByType();

  const pagePaths = ALLOWED_PAGES.map((id) => ({ params: { id: [id] } }));
  const itemPaths = ALLOWED_CONTENT_TYPES.flatMap((type) =>
    (contentsByType[type] || []).map((item) => ({
      params: { id: [type, item.slug] },
    })),
  );

  return {
    paths: [...pagePaths, ...itemPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [section, slug] = params.id;

  if (slug) {
    if (!ALLOWED_CONTENT_TYPES.includes(section)) {
      return { notFound: true };
    }

    const contentsByType = await getContentsByType();
    const item = contentsByType[section]?.find((entry) => entry.slug === slug);

    if (!item) {
      return { notFound: true };
    }

    return {
      props: {
        id: params.id,
        item,
      },
    };
  }

  if (!ALLOWED_PAGES.includes(section)) {
    return { notFound: true };
  }

  return {
    props: {
      id: params.id,
    },
  };
}

export default function DynamicPage({ id, item }) {
  const [section, slug] = id;
  const Component = contents[section];

  if (Component && slug) {
    return (
      <DefaultLayout
        title={item.title}
        description={item.description}
        image={item.image}
      >
        <div className="min-h-[calc(100vh-90px)]">
          <Component page={item} />
        </div>
      </DefaultLayout>
    );
  }

  const Page = PAGES[section];

  if (!Page) {
    return null;
  }

  return (
    <DefaultLayout {...Page.meta}>
      <div className="min-h-[calc(100vh-90px)]">
        <Page />
      </div>
    </DefaultLayout>
  );
}
