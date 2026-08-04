import AboutPage from "../../components/pages/AboutPage";
import ContactPage from "../../components/pages/ContactPage";
import ServicesPage from "../../components/pages/ServicesPage";
import DefaultLayout from "../../components/_layout/DefaultLayout";

const PAGES = {
  about: AboutPage,
  contact: ContactPage,
  services: ServicesPage,
};

const ALLOWED_PAGES = Object.keys(PAGES);

export async function getStaticPaths() {
  return {
    paths: ALLOWED_PAGES.map((id) => ({ params: { id: [id] } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default function DynamicPage({ id }) {
  const Page = PAGES[Array.isArray(id) ? id[0] : id];
  return (
    <DefaultLayout {...Page.meta}>
      <div className="min-h-[calc(100vh-90px)]">
        <Page />
      </div>
    </DefaultLayout>
  );
}
